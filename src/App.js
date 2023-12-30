//import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import ThemeSwitch from './components/ThemeSwitch';
import { CurrencyContext, ThemeContext } from './Context';
import Currency from './components/Currency';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Menu from "./components/Menu"

function App() {
  const [theme, setTheme] = React.useState("light");
  const [code, setCode] = React.useState("INR");
  const [isFirstChange, setFirstChange] = React.useState(false);
  useEffect( () => {
    if(localStorage.getItem("currency", code)) {
      setCode(localStorage.getItem("currency"));
    }
  },[])
  useEffect( () => {
    if(isFirstChange) {
      localStorage.setItem("currency", code);
    }
  },[code, isFirstChange])
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <CurrencyContext.Provider value={code}>
          <Menu/>
          <ThemeSwitch changeTheme ={(t) => setTheme(t)}/>
          <Currency 
            changeCurrency={(c) =>  {
            setCode(c)
            setFirstChange(true)
          }} 
          />
          <AppRouter/>
        </CurrencyContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
