//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Demo from './Demo';
import ProductList from "./containers/ProductList"
import Checkout from "./containers/Checkout"
import ThemeSwitch from './components/ThemeSwitch';
import { CurrencyContext, ThemeContext } from './Context';
import Currency from './components/Currency';

function App() {
  const [theme, setTheme] = React.useState("light");
  const [code, setCode] = React.useState("INR");
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Currency changeCurrency={(c) => setCode(c)} />
        <ThemeSwitch changeTheme ={(t) => setTheme(t)}/>
        <CurrencyContext.Provider value={code}>
          <ProductList/>
        </CurrencyContext.Provider>
      </ThemeContext.Provider>
      <ProductList />
    </div>
  );
}

export default App;
