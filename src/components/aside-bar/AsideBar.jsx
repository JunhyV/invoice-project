import React from "react";
import Logo from "./Logo";
import avatar from "../../assets/image-avatar.jpg";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../redux/slice/darkModeSlice";

const AsideBar = () => {
  const state = useSelector((state) => state.store.darkMode);
  const { value } = state;

  const dispatch = useDispatch();
  return (
    <div className="aside">
      <div className="aside__content">
        <Logo />
        <button className="aside__btn" onClick={() => dispatch(changeMode())}>
          <img src={value ? sun : moon} alt="" />
        </button>
      </div>
      <div className="aside__avatar">
        <img className="aside__img" src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default AsideBar;
