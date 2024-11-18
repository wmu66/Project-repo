import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button.jsx";
import "../styles/list_editor.css";
import "../styles/stats.css";
import AccountEditButton from "../components/AccountEditButton";
import TopContributors from "../components/TopContributors.jsx";
import ValueSetter from "../components/ValueSetter.jsx";


const StatsPage = () => {
    const { listID } = useParams();
    console.log(listID)
    const goBack = () => navigate("/list_editor/" + listID);
    const navigate = useNavigate();
  return (<>
        <div className="header-footer header">
            <div className="header-with-return">
            <Button
                size="medium"
                margin="no-margin"
                background="dark"
                onClick={goBack}
            >
                List editor
            </Button>
            <h1 className="header-text">
                CalorieCart: Create your healthy, nutritious grocery list today!
            </h1>
        </div>
        <AccountEditButton />
      </div>
      <div className="main-content list_editor">
        <div className="top-contributor-div"><TopContributors/></div>
        <div className="stats-div">stats div</div>
        <div className="top-contributor-div right"><ValueSetter/> </div>
      </div>
      </>
  )
}

export default StatsPage