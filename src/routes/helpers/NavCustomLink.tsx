import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

interface Props {
  label: string;
  to: string;
  action?: Function;
}

const NavCustomLink: React.FC<Props> = ({ label, to, action }) => {
  return (
    <Link to={to} className="hover:brightness-90 hover:bg-gray-300 w-full">
      <Button
        variant="text"
        color="primary"
        sx={{ textTransform: "none" }}
        onClick={action && (() => action())}
      >
        {label}
      </Button>
    </Link>
  );
};

export default NavCustomLink;
