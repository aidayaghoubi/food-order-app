
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Card from './components/ui/Card';
import Cart from './components/cart/card';
import { FunctionalProvider } from './store/cart-content';
import { useState } from 'react';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);
 
  const ShowCartHandler = () => {
    setCartIsShown(true)
  };

  const HideCartHandler = () => {

    setTimeout(() => {
      setCartIsShown(false)

    }, 500);
  };

  return (
    <FunctionalProvider>

      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onshowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </FunctionalProvider>
  );
}

export default App;
