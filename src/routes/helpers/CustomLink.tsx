import { useTheme } from "@mui/material";
import React from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import { PropsWithChildren } from "../../interfaces";

interface LinkProps extends PropsWithChildren {
  to: string;
}

const CustomLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
  const theme = useTheme();
  const themeMode = theme.palette.mode;
  const resolvedPath = useLocation();
  const isActive: Boolean =
    useMatch({ path: resolvedPath.pathname, end: true })?.pathname === to;
  const style = {
    color: themeMode === "dark" ? "#fff" : "#121212",
    // border: `1px solid ${themeMode === "dark" ? "#454545" : theme.palette.primary.main}`,
    backgroundColor: themeMode === "dark" ? "#121212" : "#51a7f2",
  };
  if (isActive) {
    // style.border = `1px solid ${themeMode === "dark" ? "#121212" : "#03a9f4"}`;
    style.backgroundColor =
      themeMode === "dark" ? "#454545" : "#e5e5e5";
  }
  return (
    <Link
      to={to}
      style={style}
      className="flex items-center h-full px-2 transition-all shadow-sm hover:brightness-90 active:scale-95"
    >
      {children}
    </Link>
  );
};

export default CustomLink;
