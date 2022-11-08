import logo from './logo.svg';
import './App.css';
import { Search } from './Components/Search';
import { Change } from './Components/Change';
import { useSelector } from 'react-redux';
import '../src/Components/theme.css'
import { useState } from 'react';

function App() {
  const boll = useSelector((state)=>state.MainReducer.flag)
   
  return (
    <div id={boll ? "dark":"light"} className="App">
     <Search/>
     <Change/>
    </div>
  );
}

export default App;
