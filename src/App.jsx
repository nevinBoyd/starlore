import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StarMap from "./pages/StarMap";

// App ONLY handles page routing.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starmap" element={<StarMap />} />
    </Routes>
  );
}

export default App;
