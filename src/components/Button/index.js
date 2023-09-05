import React from "react";

export default function Button({ onClick, children, variant }) {
  return (
    <button variant={variant} onClick={onClick}>
      {children}
    </button>
  );
}
