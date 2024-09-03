import { createContext } from "react";
import all_products from "../Datas/all_products";

 
export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
    
    const contextvalue = {all_products};

    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;