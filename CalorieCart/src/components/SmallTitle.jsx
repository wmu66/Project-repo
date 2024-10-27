// small box title component used on top of the narrow divs

import PropTypes from "prop-types";

const SmallTitle = ({ children }) => {
  return (
    <>
      <div className="small-title">{children}</div>
    </>
  );
};

SmallTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmallTitle;
