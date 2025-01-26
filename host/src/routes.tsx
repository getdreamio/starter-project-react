import { Routes, Route } from "react-router";

import Index from "./pages";
import Sample from "./pages/sample";
import About from "./pages/about";
import NotFound from "./pages/not-found";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sample/:id" element={<Sample />} />
      <Route path="/about" element={<About />} />
      {/* ELSE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;