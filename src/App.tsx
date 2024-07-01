import GlobalStyle from "./../globalStyle";
import { Dashboard } from "./pages/Dashboard";
import { FruitContent } from "./pages/FruitContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Message } from "./pages/Message";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/fruit/:fruitId" element={<FruitContent />} />
          <Route
            path="/fruit/:fruitId/message/:messageId"
            element={<Message />}
          />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
