// import { createContext, useEffect, useState } from "react";
// import { Product_list } from "../assets/assets"; 
// export const StoreContext=createContext(null)
// const StoreContextProvider=(props)=>{

//     const [cartItem,setCartItems]=useState({})
//     const addToCart=(itemId)=>{
//         if(!cartItem[itemId]){
//             setCartItems((prev)=>({...prev,[itemId]:1}))
//         }
//         else{
//             setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         }
//     }
//     const removeFromCart=([itemId])=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }

//     useEffect(()=>{
//         console.log(cartItem);
        
//     },[cartItem])

//     const contextValue={
//         Product_list,
//         cartItem,
//         setCartItems,
//         addToCart,
//         removeFromCart
//     }
//     return(
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }
// export default StoreContextProvider



import { createContext, useEffect, useState } from "react";
import { Product_list } from "../assets/assets"; 

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const currentQty = prev[itemId] || 0;
      if (currentQty <= 1) {
        const updatedCart = { ...prev };
        delete updatedCart[itemId]; // remove item from cart if quantity is 0 or less
        return updatedCart;
      }
      return {
        ...prev,
        [itemId]: currentQty - 1
      };
    });
  };

  useEffect(() => {
    console.log("Cart Updated:", cartItem);
  }, [cartItem]);

  const contextValue = {
    Product_list,
    cartItem,
    setCartItems,
    addToCart,
    removeFromCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
