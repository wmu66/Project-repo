import PropTypes from "prop-types";
import { useState } from "react";

const Arrow = ({ custom_class, onClick }) => {
  const [fillColor, setFillColor] = useState("#E0FBFC");

  const onMouseOver = () => {
    setFillColor("#B2E3E8");
  };

  const onMouseLeave = () => {
    setFillColor("#E0FBFC");
  };

  return (
    <svg
      className={"sort-arrow " + custom_class}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      data-name="1-Arrow Up"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path
        d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"
        fill={fillColor}
      />
    </svg>
  );
};

Arrow.propTypes = {
  custom_class: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Arrow;
