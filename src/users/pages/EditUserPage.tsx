import Form from "../../forms/components/Form";
import { useForm } from "../../forms/hooks/useForm";
import { setSignup, setSignupErrors } from "../../redux/forms/formDataSlice";
import signupSchema from "../models/signupSchema";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
	denormalizeUser,
	normalizeUserForUpdate,
} from "../utils/normalizeUser";
import { IUser, signupData } from "../models/models";
import { patchUserBusinessStatus, updateUser } from "../utils/userApiService";
import { AxiosResponse } from "axios";
import useSnackbar from "../../snackbar/hooks/useSnackbar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/helpers/ROUTES";
import { setUser } from "../../redux/user/userSlice";

const EditUserPage = () => {
	const { triggerSnackbar, somethingWentWrong } = useSnackbar();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, token } = useSelector((state: RootState) => state.user);
	const handleUpdateUser = async (data: signupData) => {
		const normalizedUser = normalizeUserForUpdate(data);
		const isBusiness = data["business account"].toString();
		try {
			if (isBusiness !== user.isBusiness.toString()) {
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
				dispatch(setUser(response.data));
				navigate(ROUTES.USER_PROFILE);
			} else {
				somethingWentWrong();
			}
		} catch (error) {
			somethingWentWrong();
		}
	};
	const initialForm = denormalizeUser(user) as signupData;
	const formActions = useForm(
		initialForm,
		"signup",
		signupSchema,
		handleUpdateUser,
		setSignup,
		setSignupErrors,
	);
	return (
		<Form
			colNum={2}
			inputs={[
				"first name(*)",
				"middle name",
				"last name(*)",
				"phone(*)",
				"image url(*)",
				"image alt(*)",
				"state",
				"country(*)",
				"city(*)",
				"street(*)",
				"house number(*)",
				"zip(*)",
				"business account(Bool)",
			]}
			title="Update User"
			formActions={formActions}
		/>
	);
};

export default memo(EditUserPage);
