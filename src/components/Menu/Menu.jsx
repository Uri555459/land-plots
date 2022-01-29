import { Link } from "react-scroll/modules";
import { useEffect, useState } from "react";
import { SvgSprite } from "../SvgSprite";

import "./menu.scss";

export const Menu = () => {
  const [menuToggle, setMenuToggle] = useState(false);

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
  return (
    <menu className="menu">
      <button
        className="menu__button"
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <SvgSprite id="burger" />
        <div className="menu__text">Меню</div>
        <ul className={menuToggle ? "menu-list active" : "menu-list"}>
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
    </menu>
  );
};
