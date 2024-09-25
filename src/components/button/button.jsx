import classes from "./button.module.css";
export default function Button({ children, isActiv, ...props }) {
  return (
    <button
      {...props}
      className={
        isActiv ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      {children}
    </button>
  );
}
