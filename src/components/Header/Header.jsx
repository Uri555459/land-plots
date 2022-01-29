import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { SvgSprite } from "../SvgSprite";
import "./header.scss";

export const Header = () => {
  const menuList = useRef();

  useEffect(() => {
    const menuLinks = document.querySelectorAll(".menu-list a");
    menuLinks.forEach((item) => {
      item.addEventListener("click", menuLinkActive);
    });
    function menuLinkActive(e) {
      menuLinks.forEach((item) => {
        item.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  }, []);

  const menuButtonHandler = () => {
    menuList.current.classList.toggle("active");
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="logo">
          <a href="/">
            <SvgSprite id="logo" />
          </a>
        </div>

        <a href="tel:+74951082550" className="header__phone">
          +7 (495) 108 2550
        </a>

        <div className="menu">
          <button className="menu__button" onClick={menuButtonHandler}>
            <SvgSprite id="burger" />
            <div className="menu__text">Меню</div>
            <ul className="menu-list" ref={menuList}>
              <li>
                <Link to="about" smooth={true} duration={1000}>
                  Описание
                </Link>
              </li>
              <li>
                <Link to="features" smooth={true} duration={1000}>
                  Преимущества
                </Link>
              </li>
              <li>
                <Link to="arrangement-village" smooth={true} duration={1000}>
                  Обустройство поселка
                </Link>
              </li>
              <li>
                <Link to="gallery" smooth={true} duration={1000}>
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="infrastructure" smooth={true} duration={1000}>
                  Инфраструктура
                </Link>
              </li>
              <li>
                <Link to="footer" smooth={true} duration={1000}>
                  Контакты
                </Link>
              </li>
            </ul>
          </button>
        </div>
      </div>
    </header>
  );
};
