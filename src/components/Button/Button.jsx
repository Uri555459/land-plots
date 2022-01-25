import "./button.scss";

export const Button = ({ classes = "button", text = "" }) => {
  return <button className={classes}>{text}</button>;
};
