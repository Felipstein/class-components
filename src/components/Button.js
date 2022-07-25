import React from "react";
import PropsTypes from "prop-types";

export default function Button({ children, onClick }) {

  return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );

}

Button.propTypes = {
  children: PropsTypes.node.isRequired,
  onClick: PropsTypes.func.isRequired,
}