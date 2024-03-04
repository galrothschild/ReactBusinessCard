import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "./redux/user/userSlice";
import useSnackbar from "./snackbar/hooks/useSnackbar";

function App() {
	const isDark = useSelector((state: RootState) => state.theme.isDark);
	// some theme customization
	const defaultTheme = createTheme({
		palette: {
			mode: isDark ? "dark" : "light",
		},
		components: {
			MuiGrid: {
				styleOverrides: {
					root: {
						"&.MuiGrid-root": {
							"@media (max-width:281px)": {
								paddingLeft: "2px",
							},
						},
					},
				},
			},
		},
	});
	// implement sessionTimeout
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const sessionExpiration = useSelector(
		(state: RootState) => state.user.sessionExpiration,
	);
	const { envokeSnackbar } = useSnackbar();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (sessionExpiration < new Date().getTime() && sessionExpiration !== 0) {
			dispatch(logout());
			navigate("/login");
			envokeSnackbar("Session expired", "error", 3000);
		} else {
			console.log("Banana");
		}
	}, [location]);
	return (
		<div className="App">
			<ThemeProvider theme={defaultTheme}>
				<Layout>
					<Router />
				</Layout>
			</ThemeProvider>
		</div>
	);
}

export default App;
