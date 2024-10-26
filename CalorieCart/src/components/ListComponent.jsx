import ThreeDotMenu from "./ThreeDotMenu";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ListComponent = ({ list_name, id }) => {
  const threedotmenu_options = ["Rename", "Remove"];
  console.log(id);

  const navigate = useNavigate();

  const onClick = (key) => {
    navigate("/list_editor/" + key);
  };

  return (
    <>
      <div className="list-component">
        <button
          className="list-component-button"
          onClick={() => {
            onClick(id);
          }}
        >
          <h2 className="list-name-h2">{list_name}</h2>
        </button>
        <ThreeDotMenu options={threedotmenu_options} />
      </div>
    </>
  );
};

ListComponent.propTypes = {
  list_name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ListComponent;
