import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const darkTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
