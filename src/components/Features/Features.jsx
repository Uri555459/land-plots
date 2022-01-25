// import { useState } from "react";
import { SvgSprite } from "../SvgSprite";
import "./features.scss";

export const Features = () => {
  // let windowInnerWidth = window.innerWidth;
  // const [windowWidth, setWindowWidth] = useState(windowInnerWidth);
  // // const windowInnerHeight = window.innerHeight;

  // window.addEventListener("resize", () => {
  //   windowInnerWidth = window.innerWidth;
  //   setWindowWidth(windowInnerWidth);
  //   console.log(windowWidth);
  // });

  return (
    <section className="features">
      <div className="container">
        <h3 className="section-title section-title--dark">Преимущества</h3>
        <div className="features__inner">
          <div className="features__item">
            <div className="features__item-col">
              <div
                className="features__image"
                style={{ backgroundImage: "url(images/features-1.jpg)" }}
              >
                <div className="features__image-overlay">
                  <SvgSprite id="features-icon-1" />
                  <h4 className="item-title">Смешанный лес и выход к озеру</h4>
                </div>
              </div>
            </div>
            <div className="features__item-col">
              <p className="features__item-descr">
                Часть участков граничит с лесом. Это не только прекрасный вид,
                но и свежий лесной воздух, осенние походы за грибами и летний
                сбор ягод. В границах поселка есть всё для водного досуга –
                озеро, пляж, места для рыбалки. Некоторые участки имеют выход к
                воде.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
