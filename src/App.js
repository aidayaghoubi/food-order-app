
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Card from './components/ui/Card';
import Cart from './components/cart/card';
import CartProvider from './store/CartProvider';
import { useState } from 'react';

function App() {

  const [cartIsShown , setCartIsShown] = useState(false);
   
  const ShowCartHandler = () => {
    setCartIsShown(true)
  };

  const HideCartHandler = () => {
    setCartIsShown(false)
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
    
      <Header onshowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
