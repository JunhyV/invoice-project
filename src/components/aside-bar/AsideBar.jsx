import React from "react";
import Logo from "./Logo";
import avatar from "../../assets/image-avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../redux/slice/darkModeSlice";

const AsideBar = () => {
  const state = useSelector((state) => state.store.darkMode);
  const { value } = state;

  const dispatch = useDispatch();
  return (
    <div className="aside">
      <div className="aside__svg">
        <Logo />
        <button onClick={() => dispatch(changeMode())}>Moon</button>
      </div>
      <div className="aside__img">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default AsideBar;
