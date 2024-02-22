import Nav from "./Nav";
import { Box, useTheme, IconButton } from "@mui/material";
import SearchBar from "./SearchBar";
import MenuBar from "./MenuBar";
import { memo } from "react";
import { toggleTheme } from "../../../redux/theme/themeSlice";
import { useDispatch } from "react-redux";
import { DarkMode, LightMode } from "@mui/icons-material";

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        px: 3,
        minHeight: "max-content",
        display: "flex",
        alignItems: "center",
        boxShadow: 3,
        position: "sticky",
        top: 0,
        zIndex: 2,
      }}
      bgcolor={theme.palette.mode === "dark" ? "#121212" : "#2196f3"}
    >
      <Nav />
      <SearchBar />
      <IconButton
        aria-label="theme toggle"
        onClick={() => dispatch(toggleTheme())}
      >
        {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
      </IconButton>
      <MenuBar />
    </Box>
  );
};

export default memo(Header);
