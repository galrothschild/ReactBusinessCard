import { useDispatch } from "react-redux";
import { closeSnack, triggerSnack } from "../../redux/snackbar/SnackbarSlice";

const useSnackbar = () => {
	const dispatch = useDispatch();
	const triggerSnackbar = (
		message: string,
		color: "success" | "error",
		delay: number,
	) => {
		dispatch(triggerSnack({ message, color }));
		setTimeout(() => {
			dispatch(closeSnack());
		}, delay);
	};
	const somethingWentWrong = () =>
		triggerSnackbar("Something went wrong...", "error", 3000);

	return { triggerSnackbar, somethingWentWrong };
};
export default useSnackbar;
