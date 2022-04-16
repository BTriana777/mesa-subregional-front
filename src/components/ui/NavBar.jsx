import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseNav, uiOpenNav } from "../../actions/ui";

import { FaHome, FaInfo, FaUserAlt } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import { IoMdMenu, IoMdClose, IoMdPhotos } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const { navOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickOpenNav = () => {
    if (navOpen) {
      dispatch(uiCloseNav());
    } else {
      dispatch(uiOpenNav());
    }
  };

  return (
    <nav
      className={`${
        navOpen ? "nav-main-container active" : "nav-main-container"
      }`}
    >
      <div className="nav-bnt-img-ul-container">
        <div className="btn-nav-container" onClick={handleClickOpenNav}>
          {navOpen ? (
            <IoMdClose color="#fff" size={"35px"} cursor="pointer" />
          ) : (
            <IoMdMenu color="#fff" size={"35px"} cursor="pointer" />
          )}
          <p>MSJO</p>
        </div>
        <img
          src="https://i.imgur.com/Bs8H3EA.png"
          alt="mesa-logo"
          className="img-nav"
        />
        <ul>
          <li>
            <div className="icon-text-container" onClick={() => navigate("/")}>
              <FaHome className="icon-nav" size={"38px"} cursor="pointer" />
              <span>Home</span>
            </div>
          </li>
          <li>
            <div
              className="icon-text-container"
              onClick={() => navigate("/history")}
            >
              <FaInfo className="icon-nav" size={"36px"} cursor="pointer" />
              <span>Historia</span>
            </div>
          </li>
          <li>
            <div
              className="icon-text-container"
              onClick={() => navigate("/news")}
            >
              <BiNews className="icon-nav" size={"38px"} cursor="pointer" />
              <span>Noticias</span>
            </div>
          </li>
          <li>
            <div
              className="icon-text-container"
              onClick={() => navigate("/gallery")}
            >
              <IoMdPhotos className="icon-nav" size={"38px"} cursor="pointer" />
              <span>Galeria</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="nav-user-container" onClick={() => navigate("/register")}>
        <span>Iniciar Sesion</span>
        <FaUserAlt className="icon-nav" size={"38px"} cursor="pointer" />
      </div>
    </nav>
  );
};
