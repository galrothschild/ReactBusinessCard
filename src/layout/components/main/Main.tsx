import { Box, Container, useTheme } from "@mui/material";
import React from "react";
import { PropsWithChildren } from "../../../interfaces";

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.mode === "dark" ? "#454545" : "#e3f2fd"}>
      <Container className="pt-8 pb-16" sx={{ minHeight: "90vh" }}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
