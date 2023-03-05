import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./normal.css";
import Message from "./Components/Message";
import Home from "./Components/Home";
import Bookmark from "./Components/Bookmark";
import { useState } from "react";

function App() {
  const [savedModels, setSavedModels] = useState([]);
  return (
    <Router>
      <Routes>
        <Route
          path="message"
          element={
            <Message
              savedModels={savedModels}
              setSavedModels={setSavedModels}
            />
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="saved"
          element={
            <Bookmark
              savedModels={savedModels}
              setSavedModels={setSavedModels}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
