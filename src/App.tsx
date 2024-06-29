import GlobalStyle from "./../globalStyle";
import { Dashboard } from "./pages/Dashboard";
import { FruitContent } from "./pages/FruitContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/fruit-content" element={<FruitContent />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
