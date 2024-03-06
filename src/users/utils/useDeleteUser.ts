import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { deleteUser } from "./userApiService";
import { AxiosResponse } from "axios";
import { IUser } from "../models/models";
import { useNavigate } from "react-router-dom";
import useSnackbar from "../../snackbar/hooks/useSnackbar";
import { logout } from "../../redux/user/userSlice";
import { removeUserFromUsers } from "../../redux/users/usersSlice";
import ROUTES from "../../routes/helpers/ROUTES";

export const useDeleteUser = (userId?: string) => {
	const {
		user: { _id },
		token,
	} = useSelector((state: RootState) => state.user);
	const id = userId || _id;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { triggerSnackbar } = useSnackbar();

	const handleDeleteUser = async () => {
		try {
			const response = (await deleteUser(id, token)) as AxiosResponse<IUser>;
			if (response.status === 200) {
				if (id === _id) {
					dispatch(logout());
					navigate(ROUTES.LOGIN);
				} else {
					dispatch(removeUserFromUsers(id));
					navigate(ROUTES.CRM);
				}
				triggerSnackbar("User deleted", "success", 3000);
			}
		} catch {
			return Promise.reject("Something went wrong");
		}
	};
	return { handleDeleteUser };
};
