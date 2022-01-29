import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext/ModalContext";
import { Button } from "../Button/Button";
import "./info.scss";

export const Info = () => {
  const { modalOpen } = useContext(ModalContext);

  return (
    <div className="info">
      <div className="info__time">
        Отдел продаж работает 7 дней в неделю с 10:00 до 20:00
      </div>
      <div className="info__tel">
        <span>Телефон:</span>
        <a href="tel:+71234567890">+7 (123) 456 7890</a>
      </div>
      <Button
        buttonHandler={modalOpen}
        classes="button button--green"
        text="Оставить заявку"
      />
    </div>
  );
};

export default Info;
