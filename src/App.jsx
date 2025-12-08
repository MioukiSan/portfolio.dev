import Hero from "@/components/pages/Hero";
import AppInner from "@/components/App";
import ThemeChange from "@/components/themechange";
import Preloading from "@/components/Preloading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="font-lato">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/App" element={<AppInner />} />
        </Routes>
      </div>
      <div className="absolute top-0 right-0 font-lato">
        <ThemeChange />
        <Preloading />
      </div>
    </Router>
  );
}

export default App;
