import Info from "../Info/Info";
import Map from "../Map/Map";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="container">
          <Info />
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Footer;
