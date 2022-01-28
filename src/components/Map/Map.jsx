import "./map.scss";

export const Map = () => {
  return (
    <div className="map-wrap">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A7b4410d524b6a51efa8c8116795d7adc5c235ac338b0838fea448a32e59b0ae7&amp;source=constructor"
        width="100%"
        height="350"
        title="map"
      ></iframe>
    </div>
  );
};

export default Map;
