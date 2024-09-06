import { createContext, useState } from "react";
import all_products from "../Datas/all_products";
import POPULAR from "../Datas/Popular";
import Latest from "../Datas/Latest";

 
export const ShopContext = createContext(null);

     const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < all_products.length; index++){
            cart[index] = 0;
        }
        return cart;
    }
   

const ShopContextProvider = (props) =>{

     // getting items in context
     const [cartItems, setcartItems] = useState(getDefaultCart());
    //  const [cartItem, setcartItem] = useState( getDefaultCarts());

 
     const addToCart =(itemId)=> {
        setcartItems((prev)=> ({...prev, [itemId]:prev[itemId]+1}))
        alert(cartItems);
        
     }

     const removeCart =(itemId)=>{
        setcartItems((prev)=> ({...prev, [itemId]:prev[itemId]-1}))
     }

   const contextvalue = {all_products, cartItems, POPULAR, Latest, removeCart, addToCart};
    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;