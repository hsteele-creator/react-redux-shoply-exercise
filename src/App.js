import logo from './logo.svg';
import './css/App.css';
import Products from './Products';
import Cart from './Cart';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
    </>
  );
}

export default App;
