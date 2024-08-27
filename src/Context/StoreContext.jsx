import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    
    //Adding item function
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]:1}))
        } else {
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    //Remove item function
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    //Calculating the totoal amount for the 'Cart' page.
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }


    useEffect(() => {
        console.log(cartItems);
        
    },[cartItems])

    //Passing the states, functions, so that they can be used in components. 
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider