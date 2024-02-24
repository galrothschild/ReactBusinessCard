import React, { memo } from "react";
import CustomLink from "../../../routes/helpers/CustomLink";
import Logo from "./Logo";
import ROUTES from "../../../routes/helpers/ROUTES";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Nav = () => {
  const {user:  {isAdmin, isBusiness}, isLoggedIn } = useSelector((state: RootState) => state.user)
  return (
    <div className="flex gap-3">
      <Logo />
      <div className="flex items-center">
        <CustomLink to={ROUTES.ABOUT}>About</CustomLink>
        {isLoggedIn && (<CustomLink to={ROUTES.FAV_CARDS}>Fav Cards</CustomLink>)}
        {isLoggedIn && isBusiness && (<CustomLink to={ROUTES.MY_CARDS}>My Cards</CustomLink>)}
        {isAdmin && (<CustomLink to={ROUTES.CRM}>CRM</CustomLink>)}
      </div>
    </div>
  );
};

export default memo(Nav);
