import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";
import Create from "./Create";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  );
};

export default App;
