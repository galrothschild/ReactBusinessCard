import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { getUserByID, login, signup } from "./userApiService";
import {
	getUser,
	removeToken,
	setTokenInLocalStorage,
} from "./localStorageService";
import {
	logout,
	setLogged,
	setToken,
	setUser,
} from "../../redux/user/userSlice";
import { IUser, signupData } from "../models/models";
import normalizeUser from "./normalizeUser";
import { setLogin } from "../../redux/forms/formDataSlice";
import {
	resetFailedAttempts,
	setFailedAttempts,
} from "../../redux/user/blockUserSlice";
import useSnackbar from "../../snackbar/hooks/useSnackbar";

export const useUser = (useCase: "signup" | "login") => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const { triggerSnackbar } = useSnackbar();

	const data = useSelector(
		(state: RootState) => state.formData[`${useCase}Data`],
	);
	const usersFailedAttempts = useSelector((state: RootState) =>
		state.blockUser.failedAttempts.find((user) => data.email === user.email),
	);
	const handleLogin = async () => {
		if (usersFailedAttempts?.isBlocked) {
			if (new Date().getTime() < usersFailedAttempts.blockExpiration) {
				const message = `This account is blocked, until ${new Date(
					usersFailedAttempts.blockExpiration,
				).toLocaleString()} Try again later.`;
				triggerSnackbar(message, "error", 5000);
				return message;
			}
			dispatch(resetFailedAttempts(data.email));
		}
		const token = await login(data);
		if (!token) {
			dispatch(setFailedAttempts(data.email));
			triggerSnackbar("Incorrect username or password", "error", 5000);
			return "Incorrect username or password";
		}
		if (typeof token === "string") {
			dispatch(resetFailedAttempts(data.email));
			setTokenInLocalStorage(token);
			dispatch(setToken(token));
			const user = getUser() as IUser;
			const fullUser = (await getUserByID(user._id, token)) as IUser;
			dispatch(setUser(fullUser));
			dispatch(setLogged(true));
			triggerSnackbar("Welcome back!", "success", 5000);
			navigate("/cards");
		}
		return Promise.resolve();
	};

	const handleLogout = () => {
		dispatch(logout());
		removeToken();
	};

	const handleSignup = async () => {
		const normalizedUser = normalizeUser(data as signupData);
		const user = await signup(normalizedUser);
		if (!user) return "Something went wrong...";
		dispatch(setLogin({ name: "email", value: normalizedUser.email }));
		navigate("/login");
	};

	return { handleLogin, handleLogout, handleSignup };
};
