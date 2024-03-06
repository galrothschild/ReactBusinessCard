import { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { setUser } from "../../redux/user/userSlice";
import ROUTES from "../../routes/helpers/ROUTES";
import useSnackbar from "../../snackbar/hooks/useSnackbar";
import { signupData, IUser } from "../models/models";
import { normalizeUserForUpdate, denormalizeUser } from "./normalizeUser";
import {
	getUserByID,
	patchUserBusinessStatus,
	updateUser,
} from "./userApiService";
import { updateUserInUsers } from "../../redux/users/usersSlice";

export const useUpdateUser = () => {
	const { triggerSnackbar, somethingWentWrong } = useSnackbar();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { token, user: currentUser } = useSelector(
		(state: RootState) => state.user,
	);

	const user =
		useSelector((state: RootState) => state.users.users).find(
			(user) => user._id === id,
		) || currentUser;
	const initialForm = denormalizeUser(user) as signupData;

	const handleUpdateUser = async (data: signupData) => {
		const normalizedUser = normalizeUserForUpdate(data);
		const isBusiness = data["business account"];
		try {
			if (isBusiness !== user.isBusiness) {
				await patchUserBusinessStatus(user._id, token);
			}
		} catch (error) {
			somethingWentWrong();
		}
		try {
			const response = (await updateUser(
				normalizedUser,
				user._id,
				token,
			)) as AxiosResponse<IUser>;
			if (response.status === 200) {
				triggerSnackbar("Successfully updated user", "success", 3000);
				if (response.data._id === currentUser._id) {
					dispatch(setUser(response.data));
				}
				dispatch(updateUserInUsers(response.data));
				navigate(`${ROUTES.USER_PROFILE}/${user._id}`);
			} else {
				somethingWentWrong();
			}
		} catch (error) {
			somethingWentWrong();
		}
	};

	return { initialForm, handleUpdateUser };
};
