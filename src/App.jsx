import Hero from "@/components/pages/Hero";
import AppInner from "@/components/App";
import ThemeChange from "@/components/themechange";
import Preloading from "@/components/Preloading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Snowfall from "react-snowfall";

function App() {
  return (
    <Router>
      <Snowfall />
      <div className="font-lato">
        <Routes>
          <Route path="/portfolio.dev" element={<Hero />} />
          <Route path="/Portfolio" element={<AppInner />} />
        </Routes>
      </div>
      <div className="absolute top-4 right-4 z-50">
        <ThemeChange />
        <Preloading />
      </div>
      <div className="mx-auto flex justify-center items-center text-center border-t mt-10 py-3 w-full">
        <span>© 2025. All rights reserved.</span>
      </div>
    </Router>
  );
}

export default App;
