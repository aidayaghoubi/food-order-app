
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Card from './components/ui/Card';
import Cart from './components/cart/card';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <Meals/>
          </Fragment>
  );
}

export default App;
