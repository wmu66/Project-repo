// small box title component used on top of the narrow divs

import PropTypes from "prop-types";

const SmallTitle = ({ children, customClass = "" }) => {
  return (
    <>
      <div className={"small-title " + customClass}>{children}</div>
    </>
  );
};

SmallTitle.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string, //custom class can be "wide" to set width to 320px, bright
};

export default SmallTitle;
