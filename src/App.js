import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";

function App() {
  return (
    <main>
      <section>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </section>
    </main>
  );
}

export default App;
