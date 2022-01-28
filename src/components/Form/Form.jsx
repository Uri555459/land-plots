import { Button } from "../Button/Button";
import { SvgSprite } from "../SvgSprite";
import "./form.scss";

export const Form = () => {
  return (
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
        <input className="form__input-checkbox" type="checkbox" name="policy" />
        <span>
          <SvgSprite id="check" />
        </span>
        <span>
          Даю согласие на обработку <a href="/">персональных данных</a> в
          соответствии с <a href="/">политикой конфиденциальности</a>
        </span>
      </label>
      <div className="form__button-wrap">
        <Button classes="button button--green" text="отправить заявку" />
      </div>
    </form>
  );
};
