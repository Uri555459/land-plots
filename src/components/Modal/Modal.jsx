// import { useState } from "react";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext/ModalContext";
import { Button } from "../Button/Button";
import { Form } from "../Form/Form";
import { SvgSprite } from "../SvgSprite";

import "./modal.scss";

export const Modal = () => {
  const { modalToggle, modalClose, formVisinble } = useContext(ModalContext);

  return (
    <div className={modalToggle ? "modal-overlay active" : "modal-overlay"}>
      <div className="modal">
        <SvgSprite
          modalClose={modalClose}
          classes="arrow-close"
          id="arrow-close"
        />
        {formVisinble ? (
          <>
            <h3 className="modal__title">Оставить заявку</h3>
            <p className="modal__descr">
              Оставте заявку и наш менеджер свяжеться с Вами в ближайшее время
            </p>
            <Form mail />
          </>
        ) : (
          <div className="form-success">
            <h3 className="modal__title">Спасибо Вам за обращение! </h3>
            <p className="modal__descr">
              Ваша заявка отправлена, наш менеджер свяжется с вами в ближайшее
              время!
            </p>
            <Button
              classes="button button--green"
              buttonHandler={modalClose}
              text="Закрыть"
            />
          </div>
        )}
      </div>
    </div>
  );
};
