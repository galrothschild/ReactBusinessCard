import { useDispatch } from "react-redux";
import { closeSnack, envokeSnack } from "../../redux/snackbar/SnackbarSlice";

const useSnackbar = () => {
	const dispatch = useDispatch();
	const envokeSnackbar = (
		message: string,
		color: "success" | "error",
		delay: number,
	) => {
		dispatch(envokeSnack({ message, color }));
		setTimeout(() => {
			dispatch(closeSnack());
		}, delay);
	};
	const somethingWentWrong = () =>
		envokeSnackbar("Something went wrong...", "error", 3000);

	return { envokeSnackbar, somethingWentWrong };
};
export default useSnackbar;
