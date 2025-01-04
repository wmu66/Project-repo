import ListEditorPage from "./ListEditorPage";
import { useParams } from "react-router-dom";

const ImprovementPage = () => {
  const { listID, sortDir } = useParams(); //gets the listID from the URL
 
  return (
    <div className="improvement-page">
      <ListEditorPage defaultSortDirection={sortDir} customHeadingText={"Showing grocery items that would help in the category of " + (sortDir == "Fat" ? "fats" : sortDir.toLowerCase())}/>
    </div>
  );
};

export default ImprovementPage;
