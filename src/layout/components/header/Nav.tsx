import React from "react";
import CustomLink from "../../../routes/helpers/CustomLink";
import Logo from "./Logo";
import ROUTES from "../../../routes/helpers/ROUTES";

const Nav = () => {
  return (
    <div className="flex gap-3">
      <Logo />
      <div className="flex items-center">
        <CustomLink to={ROUTES.ABOUT}>About</CustomLink>
        <CustomLink to={ROUTES.FAV_CARDS}>Fav Cards</CustomLink>
        <CustomLink to={ROUTES.MY_CARDS}>My Cards</CustomLink>
        <CustomLink to={ROUTES.SANDBOX}>Sandbox</CustomLink>
      </div>
    </div>
  );
};

export default Nav;
