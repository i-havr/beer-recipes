import PropTypes from "prop-types";
import * as SC from "./Button.styled";

export const Button = ({ children, actionHandler }) => {
  return (
    <SC.Button onClick={actionHandler} type="button">
      {children}
    </SC.Button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  actionHandler: PropTypes.func,
};
