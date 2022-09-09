import './App.css';
import Header from "./Components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Photos from "./Pages/Photos"
import Cart from "./Pages/Cart"


function App() {
  return (
      <BrowserRouter>
         <Header/>
         <Routes>
             <Route exact path="/" element={<Photos/>}></Route>
             <Route exact path="/cart" element={<Cart/>}></Route>
         </Routes>
      </BrowserRouter>
  );
}

export default App;
