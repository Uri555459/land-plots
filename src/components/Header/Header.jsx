import { SvgSprite } from "../SvgSprite";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="logo">
          <a href="/">
            <SvgSprite id="logo" />
          </a>
        </div>

        <div className="menu">
          <button className="menu__btn">
            <SvgSprite id="burger" />
            <div className="menu__text">Меню</div>
          </button>
        </div>
      </div>
    </header>
  );
};
