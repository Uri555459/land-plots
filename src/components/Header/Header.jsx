import { Menu } from "../Menu/Menu";
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
        <a href="tel:+74951082550" className="header__phone">
          +7 (495) 108 2550
        </a>
        <Menu />
      </div>
    </header>
  );
};
