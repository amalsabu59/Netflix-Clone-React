import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { orginals,action, horror, romance, comedy } from './Components/urls'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={orginals} title="Netflix Orginals"/>
        <RowPost url={action} title="Action" />
        <RowPost url={horror} title="Horror" />
        <RowPost url={romance} title="Romance" />
        <RowPost url={comedy} title="Comedy" />
    </div>
  );
}

export default App;
