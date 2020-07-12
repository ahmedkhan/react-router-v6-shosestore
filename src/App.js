import React, { useContext } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import listContext from './contexts/list_context';
import List from './components/List';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import {CartIcon} from '../src/components/icons';
import {HomeIcon} from '../src/components/icons';

import styles from './components/shared/ProductsGrid.module.scss';
import About from './components/About';



function App() {
  const { cartCount } = useContext(listContext);

  return (
    <div>
      <div className={styles.header}>
        <Link to='/'><HomeIcon/> Store</Link>
        <Link to='/about'>About</Link>
        <Link to='/cart'><CartIcon/> Cart ({cartCount})</Link>
      </div>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path=":slug" element={<ProductDetails />} />        
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
