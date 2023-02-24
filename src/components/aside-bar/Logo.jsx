import React from "react";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__light">
      </div>
      <img className="logo__img" src={logo} alt="logo-img" />
    </div>
  );
};

export default Logo;
