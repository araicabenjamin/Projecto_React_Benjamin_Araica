import React from 'react';
import './styles/global.scss'; 
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="This is an item list message!" />
    </div>
  )
}

export default App;
