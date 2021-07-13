import React from "react";
import { Link } from "react-router-dom";
import logoBrand from "../../assets/icons/Badiiyat.svg";
import userImg from "../../assets/images/user-img.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="row justify-between align-center">
            <Link to="/" className="navbar__brand-logo">
              <img src={logoBrand} alt="brand logo" />
            </Link>
            <ul className="navbar__menu">
              <li className="navbar__menu-item">
                <Link to="/" className="navbar__menu-link">
                  Bosh sahifa
                </Link>
              </li>
              <li className="navbar__menu-item">
                <Link to="/" className="navbar__menu-link">
                  Nasr
                </Link>
              </li>
              <li className="navbar__menu-item">
                <Link to="/" className="navbar__menu-link">
                  Nazm
                </Link>
              </li>
              <li className="navbar__menu-item">
                <Link to="/" className="navbar__menu-link">
                  Maqolalar
                </Link>
              </li>
              <li className="navbar__menu-item">
                <Link to="/" className="navbar__menu-link">
                  Forum
                </Link>
              </li>
            </ul>
            <div className="navbar__user">
              <span className="navbar__user-img">
                <img src={userImg} alt=" user images" />
              </span>
              <button className="navbar__user-btn">
                <i className="ic ic_dawn"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
