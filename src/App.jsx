import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from "react";
import { Tooltip, initTWE,  Collapse,
  Ripple, } from "tw-elements";
import HeaderComponent from './components/Header';


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    initTWE({ Tooltip,Collapse, Ripple });
  }, []);

  return (
    <>
    <HeaderComponent/>
    </>
  )
}

export default App
