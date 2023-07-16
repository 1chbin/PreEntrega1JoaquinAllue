import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './components/cart/cart';
import LoginScreen from './Auth/LoginScreen';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import RegisterScreen from './Auth/RegisterScreen'
import Checkout from './Checkout/Checkout';


function AppRouter() {
  const {user} = useContext(AuthContext)

  return (
    
    <div className="App">
      <BrowserRouter>
      
        {user.logged
        ?
        <>
      <Routes>
          <Route path='/login' element={<LoginScreen/>}/>
        </Routes>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path='*' element={<h1>Error 404</h1>} /> */}
          <Route path='*' element={<ItemListContainer/>} />
        </Routes>
      </>
    
    :<Routes>
                  <Route path="/login" element={<LoginScreen />}/>
                  <Route path="/register" element={<RegisterScreen />}/>
                  <Route path="*" element={<Navigate to="/login"/>}/>
                </Routes>
                }
    </BrowserRouter>
    </div>
  );
}

export default AppRouter;
