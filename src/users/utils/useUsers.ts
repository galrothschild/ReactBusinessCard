import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useSnackbar from "../../snackbar/hooks/useSnackbar";
import { IUser } from "../models/models";
import { setUsers, setUsersPending } from "../../redux/users/usersSlice";
import { getUsers } from "./userApiService";
import { useEffect } from "react";

export const useUsers = () => {
	const { triggerSnackbar, somethingWentWrong } = useSnackbar();
	const dispatch = useDispatch();
	const users = useSelector((state: RootState) => state.users.users);
	const isPending = useSelector((state: RootState) => state.users.isPending);
	const currentUserToken = useSelector((state: RootState) => state.user.token);
	let error: unknown;
	const fetchUsersIfEmpty = async (users: IUser[]) => {
		let updatedUsers: IUser[] | unknown = users;
		if (users.length <= 1) {
			try {
				dispatch(setUsersPending(true));
				updatedUsers = await getUsers(currentUserToken);
				triggerSnackbar("Success!", "success", 5000);
			} catch (err) {
				error = err;
				somethingWentWrong();
			} finally {
				dispatch(setUsersPending(false));
			}
		}
		if (updatedUsers) {
			dispatch(setUsers(updatedUsers as IUser[]));
		}
	};
	// biome-ignore lint/correctness/useExhaustiveDependencies: We want this to run only once on mount.
	useEffect(() => {
		fetchUsersIfEmpty(users);
	}, []);
	return { users, isPending, error };
};
