import { createContext, useEffect, useState } from "react";
import all_products from "../Datas/all_products";
import POPULAR from "../Datas/Popular";
import Latest from "../Datas/Latest";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export const ShopContext = createContext(null);

     const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < 300 + 1; index++){
            cart[index] = 0;
        }
        return cart;
    }
   

const ShopContextProvider = (props) =>{

     // getting items in context
     const [cartItems, setcartItems] = useState(getDefaultCart());
     const [all_products, setAll_product] = useState([]);
     const [shippingFee] = useState(20);

    //  fetching all products
     useEffect(()=>{
      fetch("http://localhost:4000/allproducts").then((response)=> response.json()).then(
      (data)=> setAll_product(data)
      );
      if(localStorage.getItem('auth-token')){
        fetch("http://localhost:4000/getcart",{
          method: "POST",
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type' : 'application/json',
          },
          body:JSON.stringify({itemId:itemId}),
        }).then((response)=> response.json()).then((data)=> console.log(data)
        );
      }
     },[])


     const addToCart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if(localStorage.getItem('auth-token')){
          fetch("http://localhost:4000/addtocart",{
            method: "POST",
            headers: {
              Accept: 'application/form-data',
              'auth-token': `${localStorage.getItem('auth-token')}`,
              'Content-Type' : 'application/json',
            },
            body:JSON.stringify({itemId:itemId}),
          }).then((response)=> response.json()).then((data)=> console.log(data)
          );
        }
      }
    
      // Function to handle removing item from cart
      const removeCart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(localStorage.getItem('auth-token')){
          fetch("http://localhost:4000/removefromcart",{
            method: "POST",
            headers: {
              Accept: 'application/form-data',
              'auth-token': `${localStorage.getItem('auth-token')}`,
              'Content-Type' : 'application/json',
            },
            body:JSON.stringify({itemId:itemId}),
          }).then((response)=> response.json()).then((data)=> console.log(data)
          );
        }
        // Find the removed product's name and show a toast notification
        const itemInfo = all_products.find((product) => product.id === Number(itemId));
        if (itemInfo) {
          toast.info(`${itemInfo.name} removed from the cart.`);
        }
      };


     // Total cart amount including the shipping fee
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    // Calculate the total amount for items in the cart
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }

    // Add the shipping fee to the total
    return totalAmount > 0 ? totalAmount + shippingFee : 0; // Only add shipping fee if there are items in the cart
  };

  // Total cart amount with shipping fee (for reference, kept as a separate function)
     const getTotalWithShipping = () => {
        const totalCartAmount = getTotalCartAmount();
        return  shippingFee; // Add shipping fee only if there are items in the cart
      };

      // notification cart
      const getTotalCartItems = () =>{
        let totalItem = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item];
            }
            
        }
        return totalItem;
     }

   const contextvalue = {getTotalCartItems,getTotalWithShipping,all_products, cartItems, POPULAR, Latest, removeCart, addToCart,getTotalCartAmount,};
    return (
        <ShopContext.Provider value={contextvalue}>
             <ToastContainer />
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;