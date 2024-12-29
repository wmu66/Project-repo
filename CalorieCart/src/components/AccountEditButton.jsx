import { useNavigate } from "react-router-dom";
import AccountCirleIcon from "../assets/account_circle_white.svg";

const AccountEditButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/detail_entry");
  };

  return (
    <button className="account-edit-button" onClick={onClick}>
      <img
        src={AccountCirleIcon}
        alt="account icon"
        className="account-circle-button"
      ></img>
    </button>
  );
};

export default AccountEditButton;
