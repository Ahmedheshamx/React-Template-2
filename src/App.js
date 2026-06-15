import ProjectDetails from "./compenent/ProjectDetails.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./compenent/HomePage.js";







const App = () => {




  return (
//  

    <BrowserRouter className="app">
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>






  );
};

export default App;
