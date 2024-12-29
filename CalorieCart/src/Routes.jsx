import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListCreatorPage from "./pages/ListCreatorPage";
import PageNotFound from "./pages/PageNotFound";
import ListEditorPage from "./pages/ListEditorPage";
import StatsPage from "./pages/StatsPage";
import TargetSetterPage from "./pages/TargetSetterPage";
import ImprovementPage from "./pages/ImprovementPage";
import WelcomePage from "./pages/WelcomePage";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/detail_entry" element={<HomePage />} />
        <Route path="/create_list" element={<ListCreatorPage />} />
        <Route path="/list_editor/:listID" element={<ListEditorPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/stats/:listID" element={<StatsPage />} />
        <Route path="/targets" element={<TargetSetterPage />} />
        <Route path="/improvements/:listID" element={<ImprovementPage />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
