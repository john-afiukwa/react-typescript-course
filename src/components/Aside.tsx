import { sideLinks } from "../AsideData";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";

import "./Aside.css";

const Aside = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const sidebar = () => setShowSideNav(!showSideNav);

  return (
    <>
      <div className="navbar">
        <div className="sideHead">
          <span>Media HD</span>

          <Link
            to="/"
            className={showSideNav ? "menu-bar inactive" : "menu-bar"}
          >
            <FaIcons.FaBars onClick={sidebar} />
          </Link>

          <Link to="/" className={showSideNav ? "x-bar active" : "x-bar"}>
            <AiIcons.AiOutlineClose onClick={sidebar} />
          </Link>
        </div>
      </div>

      <nav
        className={showSideNav ? "nav-menu active" : "nav-menu"}
        onClick={sidebar}
      >
        {sideLinks.map((item, index) => {
          return (
            <div key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default Aside;
