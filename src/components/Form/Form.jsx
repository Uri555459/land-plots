import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext/ModalContext";
import { Button } from "../Button/Button";
import { SvgSprite } from "../SvgSprite";
import "./form.scss";

export const Form = ({ mail }) => {
  const { formSubmit, formPolicyHandler, isChecked } = useContext(ModalContext);

  return (
    <form className="form" onSubmit={(e) => formSubmit(e)}>
      <div className="form__col">
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
        {mail && (
          <div className="form__input-wrap">
            <input
              className="form__input"
              type="email"
              name="email"
              required
              placeholder="Email"
            />
            <SvgSprite id="mail" />
          </div>
        )}
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
      </div>
      <div className="form__col">
        <label className="form__label">
          <input
            className="form__input-checkbox"
            type="checkbox"
            name="policy"
            onChange={formPolicyHandler}
            checked={isChecked}
          />
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
      </div>
    </form>
  );
};
