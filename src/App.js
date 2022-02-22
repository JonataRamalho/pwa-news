import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Post from "./containers/Post";

function App() {
  return (
    <main>
      <section>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:subject/:id" element={<Post />}></Route>
          </Routes>
        </Router>
      </section>
    </main>
  );
}

export default App;
