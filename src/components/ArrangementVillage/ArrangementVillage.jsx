import { SvgSprite } from "../SvgSprite";
import "./arrangement-village.scss";

export const ArrangementVillage = () => {
  return (
    <section className="arrangement-village" id="arrangement-village">
      <div className="container">
        <h2 className="section-title section-title--dark">
          Обустройство поселка
        </h2>
        <div className="arrangement-village__inner">
          <div className="arrangement-village__item">
            <div className="arrangement-village__item-title-wrap">
              <SvgSprite id="arrangement-village-1" />
              <h4 className="item-title item-title--dark">Газ</h4>
            </div>
            <p className="arrangement-village__item-descr">
              Газ дешевле электричества в 7,5 раз, а так же с газом никогда не
              бывает перебоев. Отопление дома на 100м² обойдется всего в 612
              руб.
            </p>
          </div>
          <div className="arrangement-village__item">
            <div className="arrangement-village__item-title-wrap">
              <SvgSprite id="arrangement-village-2" />
              <h4 className="item-title item-title--dark">Электричество</h4>
            </div>
            <p className="arrangement-village__item-descr">
              В поселке «Балакирево» есть электричество, с выделением 15 Квт на
              участок. Подведено к границе каждого участка
            </p>
          </div>
          <div className="arrangement-village__item">
            <div className="arrangement-village__item-title-wrap">
              <SvgSprite id="arrangement-village-3" />
              <h4 className="item-title item-title--dark">
                Пропускная система
              </h4>
            </div>
            <p className="arrangement-village__item-descr">
              Участки в поселке не нужно приватизировать, они становятся вашей
              собственностью сразу после подписания договора купли-продажи
            </p>
          </div>
          <div className="arrangement-village__item">
            <div className="arrangement-village__item-title-wrap">
              <SvgSprite id="arrangement-village-4" />
              <h4 className="item-title item-title--dark">Забор</h4>
            </div>
            <p className="arrangement-village__item-descr">
              Построена дорожная сеть с твердым покрытием шириной 7м для главных
              и 4,5м для второстепенных дорог
            </p>
          </div>
          <div className="arrangement-village__item">
            <div className="arrangement-village__item-title-wrap">
              <SvgSprite id="arrangement-village-5" />
              <h4 className="item-title item-title--dark">Забор</h4>
            </div>
            <p className="arrangement-village__item-descr">
              Построено ограждение по периметру поселка (высота 2м).
            </p>
          </div>
          <div className="arrangement-village__item">
            <div className="arrangement-village__item-title-wrap">
              <SvgSprite id="arrangement-village-6" />
              <h4 className="item-title item-title--dark">Лес и водоем</h4>
            </div>
            <p className="arrangement-village__item-descr">
              Поселок идеально подходит для постоянного проживания, и в то же
              время вы прекрасно отдохнете на природе. Вблизи поселка есть лес,
              а также места для рыбалки и отдыха у воды.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
