import { Button } from "../Button/Button";
import { SvgSprite } from "../SvgSprite";

import "./individual-offer.scss";

export const IndividualOffer = () => {
  return (
    <section className="individual-offer">
      <div className="container">
        <div className="individual-offer__inner">
          <div className="individual-offer__content">
            <h2 className="section-title">
              Получить индивидуальное предложение
            </h2>
            <form className="form">
              <div className="form__input-wrap">
                <input
                  className="form__input"
                  type="text"
                  name="name"
                  required
                  placeholder="Имя"
                />
                <SvgSprite id="user" />
              </div>
              <div className="form__input-wrap">
                <input
                  className="form__input"
                  type="tel"
                  name="tel"
                  required
                  placeholder="+7 (123) 456 7890"
                />
                <SvgSprite id="phone" />
              </div>
              <label className="form__label">
                <input
                  className="form__input-checkbox"
                  type="checkbox"
                  name="policy"
                />
                <span>
                  <SvgSprite id="check" />
                </span>
                <span>
                  Даю согласие на обработку <a href="/">персональных данных</a>{" "}
                  в соответствии с <a href="/">политикой конфиденциальности</a>
                </span>
              </label>
              <div className="form__button-wrap">
                <Button
                  classes="button button--green"
                  text="отправить заявку"
                />
              </div>
            </form>
          </div>
          <div className="individual-offer__image-wrap">
            <div
              className="individual-offer__image"
              style={{ backgroundImage: "url(images/individual-offer-bg.jpg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
