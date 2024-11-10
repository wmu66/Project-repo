import PropTypes from "prop-types";

const ContributingItem = ({text, value, measurement}) => {
  return (
    <div className="contributing-item">{text}<span style={{ color: "var(--accentcolor2)" }}>{value + measurement}</span></div>
  )
}

ContributingItem.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.number,
    measurement: PropTypes.string.isRequired,
  };

export default ContributingItem