import React from "react";

function Button({ title, onClick, variant, disabled, fullWidth, type }) {

  let className = "bg-primary p-1 text-white";

  if (fullWidth) {
    className += "w-full";
  }

  if (variant === "outlined") {
    className.replace(
      "bg-primary",
      "border border-primary bg-white text-primary"
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
