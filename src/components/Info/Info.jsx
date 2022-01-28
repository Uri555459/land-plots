import { Button } from "../Button/Button";
import "./info.scss";

export const Info = () => {
  return (
    <div className="info">
      <div className="info__time">
        Отдел продаж работает 7 дней в неделю с 10:00 до 20:00
      </div>
      <div className="info__tel">
        <span>Телефон:</span>
        <a href="tel:+71234567890">+7 (123) 456 7890</a>
      </div>
      <Button classes="button button--green" text="Открыть в картах" />
    </div>
  );
};

export default Info;
