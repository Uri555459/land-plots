import "./button.scss";

export const Button = ({
  classes = "button",
  text = "",
  buttonHandler = Function.prototype,
}) => {
  return (
    <button onClick={buttonHandler} className={classes}>
      {text}
    </button>
  );
};
