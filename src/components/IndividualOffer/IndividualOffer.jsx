import { Form } from "../Form/Form";

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
            <Form />
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
