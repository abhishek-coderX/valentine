import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questionnaire from "./components/Questionnaire";
import SingleExperience from "./components/SingleExperience";
import LoveTest from "./components/LoveTest";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Questionnaire />} />
        <Route path="/single" element={<SingleExperience />} />
        <Route path="/love-test" element={<LoveTest />} />
      </Routes>
    </Router>
  );
}

export default App;
