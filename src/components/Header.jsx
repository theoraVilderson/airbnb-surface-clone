import React from "react";
import "./Header.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

import {
  UserCircleIcon,
  ChevronDownIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <Logo className="header__logo" />
      </Link>
      <SearchBox />

      <Link to="/" className="header__host text__link">
        <b>Become A Host</b>
        <GlobeAltIcon className="header__hostIcon" />
      </Link>

      <div className="header__profile">
        <ChevronDownIcon className="header__profileIcon" />
        <UserCircleIcon className="header__profileIcon" />
      </div>
    </header>
  );
}

export default Header;
