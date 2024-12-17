import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListCreatorPage from "./pages/ListCreatorPage";
import PageNotFound from "./pages/PageNotFound";
import ListEditorPage from "./pages/ListEditorPage";
import StatsPage from "./pages/StatsPage";
import TargetSetterPage from "./pages/TargetSetterPage";
import ImprovementPage from "./pages/ImprovementPage";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create_list" element={<ListCreatorPage />} />
        <Route path="/list_editor/:listID" element={<ListEditorPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/stats/:listID" element={<StatsPage />} />
        <Route path="/targets" element={<TargetSetterPage />} />
        <Route path="/improvements/:listID" element={<ImprovementPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
