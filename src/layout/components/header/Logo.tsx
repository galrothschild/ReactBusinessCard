import React from "react";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/helpers/ROUTES";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <IconButton
      aria-label="Business Card"
      onClick={() => navigate(ROUTES.ROOT)}
    >
      <img
        src={
          window.location.origin + "/ReactBusinessCard/assets/images/bcard.png"
        }
        alt="logo"
        style={{ height: "50px" }}
      />
    </IconButton>
  );
};

export default Logo;
