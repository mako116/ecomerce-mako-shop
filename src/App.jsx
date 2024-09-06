import { BrowserRouter, Route, Routes } from "react-router-dom"
 
import './App.css'
import { Header } from './components/headers/Header'
import { Home } from "./components/homesection/Home"
import { Category } from "./components/category/Category"
 import { Login } from "./components/auth/Login"
import { Footer } from "./components/footer/Footer"
// import images 
import bannermens from "../src/assets/shirts/images.jpg"
import bannerwomen from "../src/assets/shirts/tees-facecap-combo.jpg"
import bannerkids from "../src/assets/shirts/blank-t-shirt-png-33.jpg"
import Product from "./components/Product/Product"
 import { ProductDisplay } from "./components/Product/ProductDisplay"
import { Cart } from "./components/cart/Cart"

function App() {
 
  return (
    <>
      <main className=" bg-primary text-gray">
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mens" element={<Category category="men" banner={bannermens} />}/>
          <Route path="/women" element={<Category category="women" banner={bannerwomen}/>}/>
          <Route path="/kids" element={<Category category="kids" banner={bannerkids} />}/>
           <Route path="/product" element={<Product/>}>
          <Route path=":productId"   element={<Product/>}/>
          </Route>
           
          <Route path="/cartpage" element={ <Cart/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
