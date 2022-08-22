import { createContext, useState } from "react";

 export const contexto = createContext(); 
 const { Provider } = contexto; 

 const CartContext = (props) => {

     const [cantidad, setCantidad] = useState(0);
     const [carrito, setCarrito] = useState([]);

     const agregarProducto = (producto) => {
         console.log("Soy el contexto!")
         console.log(producto)
            setCantidad(cantidad + producto.cantidad)
     }

     const eliminarProducto = () => {}

     const vaciarCarrito = () => {
         setCarrito([])
     }

     const estaEnCarrito = (id) => {
         
     }
    
     const valorDelContexto = {
         cantidad: cantidad,
         carrito : carrito,
         agregarProducto,
         eliminarProducto,
     }

     return(
         <Provider value={valorDelContexto}>
             {props.children}
         </Provider>
     )
 }


 export default CartContext;