// import { Router } from "react-router-dom";
// import "./App.css";

// import Header from "./Components/Header";
// import Portfolio from "./Components/Portfolio";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         {/* <Header />
//       <Portfolio /> */}
//       </Router>
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
