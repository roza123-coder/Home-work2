import React from "react";
import logo from "./Logo.png";
import heart from "./search HEART shopping-cart.png";

const Header = () => {
  return (
    <header
      style={{
        padding: "20px",
        display: "flex",
        alignItems: "center",
        gap: "150px",
      }}
      className="hero-header"
    >
      <img width="auto" height="15px" src={logo} alt="logo" />
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "15px",
          }}
        >
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#shop">SHOP</a>
          </li>
          <li>
            <a href="#lookbook">LOOKBOOK</a>
          </li>
          <li>
            <a href="#features">FEATURES</a>
          </li>
          <li>
            <a href="#pages">PAGES</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
          </li>
        </ul>
      </nav>
      <div>
        <img src={heart} alt="" />
      </div>
    </header>
  );
};

export default Header;
