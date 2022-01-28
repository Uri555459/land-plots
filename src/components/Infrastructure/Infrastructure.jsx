import { SvgSprite } from "../SvgSprite";

import "./infrastructure.scss";

export const Infrastructure = () => {
  return (
    <section className="infrastructure">
      <div className="container">
        <h2 className="section-title">Инфраструктура</h2>
        <p className="infrastructure__descr">
          Коттеджный посёлок Балакирево находится на юге Московской области. С
          одной стороны посёлка расстилается лес — это не только прекрасный вид,
          но и свежий воздух, осенние походы за грибами и летний сбор ягод.
          Присутствует уличное освещение. В границах поселка есть всё для
          водного досуга – озеро, пляж, рыбалка. Некоторые участки имеют выход к
          воде. Днем и по ночам охрана делает обходы.
        </p>
        <div className="infrastructure__inner">
          <div className="infrastructure__image-wrap">
            <div
              className="infrastructure__image"
              style={{
                backgroundImage: "url(images/infrastructure-image.jpg)",
              }}
            >
              <div className="infrastructure__image-overlay">
                <SvgSprite id="infrastructure-1" />
                <h4 className="item-title">Храм</h4>
              </div>
            </div>
          </div>
          <div className="infrastructure__items">
            <div className="infrastructure__item">
              <SvgSprite id="infrastructure-2" />
              <h4 className="item-title">Продуктовые магазины</h4>
            </div>
            <div className="infrastructure__item">
              <SvgSprite id="infrastructure-3" />
              <h4 className="item-title">Аптеки</h4>
            </div>
            <div className="infrastructure__item">
              <SvgSprite id="infrastructure-4" />
              <h4 className="item-title">Школа</h4>
            </div>
            <div className="infrastructure__item">
              <SvgSprite id="infrastructure-5" />
              <h4 className="item-title">Садовый рынок</h4>
            </div>
            <div className="infrastructure__item">
              <SvgSprite id="infrastructure-6" />
              <h4 className="item-title">Сельскохозяйственный рынок</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
