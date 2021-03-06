import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext/ModalContext";
import { Button } from "../Button/Button";
import "./offer.scss";

export const Offer = () => {
  const { modalOpen } = useContext(ModalContext);

  return (
    <div className="offer">
      <div
        className="offer__bg"
        style={{ backgroundImage: "url(images/offer.jpg)" }}
      />
      <div className="offer__content">
        <div className="container">
          <h1 className="offer__title">Балакирево</h1>
          <p className="offer__descr">
            Продажа земельных участков в коттеджном поселке{" "}
          </p>
          <div className="offer__info">
            <div className="offer__item">
              <sup>от</sup>
              <span className="offer__item-num">45K</span>
              <span>
                <sup>руб</sup>
                за сотку
              </span>
            </div>

            <div className="offer__item">
              <span className="offer__item-num">77</span>
              <span>
                <sup>км от МКАД</sup>
                до поселка
              </span>
            </div>

            <div className="offer__item">
              <span className="offer__item-num">96</span>
              <span>
                <sup>участков</sup>в продаже
              </span>
            </div>

            <div className="offer__item">
              <span className="offer__item-num">24</span>
              <span>
                <sup>га</sup>
                площади
              </span>
            </div>
          </div>
          <Button
            buttonHandler={modalOpen}
            classes="button"
            text="Оставить заявку"
          />
        </div>
      </div>
    </div>
  );
};
