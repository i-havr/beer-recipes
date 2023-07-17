import PropTypes from "prop-types";
import * as SC from "./Button.styled";

export const Button = ({ children, type, actionHandler }) => {
  return (
    <SC.Button
      style={type === "refresh" ? { right: 130 } : { right: 300 }}
      onClick={actionHandler}
      type="button"
    >
      {children}
    </SC.Button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  actionHandler: PropTypes.func,
  type: PropTypes.string,
};
