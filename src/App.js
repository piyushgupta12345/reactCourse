import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";

import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* About Routes */}
          <Route path="/about" element={<About />}>
          </Route>

          {/* Contact Routes */}
          <Route path="/contact" element={<Contact />}>
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
