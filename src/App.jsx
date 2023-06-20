import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='*' element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
      
      {/* <NavBar />
      <ItemListContainer greeting={'Hola! Bienvenidos a mi proyecto'} />
      <hr />
      <ItemDetailContainer /> */}
    </div>
  );
}

export default App;
