import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import { Home } from './Pages/home';
import { Products } from './Pages/Products';
import { NavBar } from './components/NavBar';
import { ProductIndex } from './Pages/ProductIndex';
import { ProductDetails } from './Pages/ProductDetails';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />}>
          <Route path="/" element={<ProductIndex />} />
          <Route path=":slug" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
