import { SvgSprite } from '../SvgSprite'
import './arrangement-village.scss'

export const ArrangementVillage = () => {
  return (
    <section className="arrangement-village">
      <div className="container">
        <h2 className="section-title section-title--dark">Обустройство поселка</h2>
        <div className="arrangement-village__inner">
          <div className="arrangement-village__item">
            <div className="arrangement-village__item-title-wrap">
              <SvgSprite />
              <h4 className="item-title item-title--dark">Газ</h4>
            </div>
            <p className="arrangement-village__item-descr">
              Газ дешевле электричества в 7,5 раз, а так же с газом никогда не бывает перебоев. Отопление дома на 100м² обойдется всего в 612 руб.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}