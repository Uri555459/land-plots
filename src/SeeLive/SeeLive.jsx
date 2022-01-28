import { Form } from "../components/Form/Form";
import "./see-live.scss";

export const SeeLive = () => {
  return (
    <section
      className="see-live"
      style={{ backgroundImage: "url(images/see-live-bg.jpg)" }}
    >
      <div className="container">
        <div className="h2 section-title"></div>
        <Form />
      </div>
    </section>
  );
};

export default SeeLive;
