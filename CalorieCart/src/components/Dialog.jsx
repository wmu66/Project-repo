import PropTypes from "prop-types";
import React from "react";

const Dialog = React.forwardRef(
  ({ text, ok_button_text, input_type = "text" }, ref) => {
    return (
      <dialog ref={ref} className="list-creator-dialog">
        <form className="list-creator-form">
          <input type={input_type} className="input" placeholder={text} />
          <div className="list-creator-dialog-button-div">
            <button type="submit" formMethod="dialog" className="button small">
              Cancel
            </button>
            <button type="submit" className="button small">
              {ok_button_text}
            </button>
          </div>
        </form>
      </dialog>
    );
  }
);

Dialog.displayName = "Dialog";

Dialog.propTypes = {
  ref: PropTypes.oneOfType([
    PropTypes.func, // for callback refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }), // for object refs
  ]),
  text: PropTypes.string.isRequired,
  ok_button_text: PropTypes.string.isRequired,
  input_type: PropTypes.string,
};

export default Dialog;
