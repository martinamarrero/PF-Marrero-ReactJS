import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element ={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
      </Routes>
      </BrowserRouter>
      
      <ItemListContainer greeting={'Bienvenidos'} />
      <ItemDetailContainer/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
      
    </div>
  );
}

export default App;
