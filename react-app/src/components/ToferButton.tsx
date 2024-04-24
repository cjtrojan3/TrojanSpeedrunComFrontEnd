import React from "react";

interface Props {
  text: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const ToferButton = ({ text, color, onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default ToferButton;
