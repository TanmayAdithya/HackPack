import { Route, Routes } from "react-router-dom";
import Resources from "../components/ResourcesPage";
import Tips from "../components/TipsPage.jsx";
import DocMaker from "./DocMaker.jsx";
const RoutesContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Tips" element={<Tips />} />
        <Route path="/DocumentationMaker" element={<DocMaker />} />
      </Routes>
    </>
  );
};

export default RoutesContainer;
