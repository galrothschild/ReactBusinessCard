import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
	const isDark = useSelector((state: RootState) => state.theme.isDark);
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
