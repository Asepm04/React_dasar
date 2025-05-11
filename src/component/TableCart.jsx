import { useSelector } from "react-redux";
import { useState,useEffect } from "react";

const TableCart = (props) =>
{
    const {data} =  props;
    const cart = useSelector((state) =>state.cart.data);
    const [totalPrice,setTotalPrice] = useState(0);


       useEffect(()=>
        { 
          if(cart.length > 0 && data.length > 0)
          {
            const sum =  cart.reduce((acc,item) => 
                {
                    const price = data.find(product => product.id === item.id);
                    return acc + price.price * item.qty;
                }
                ,0);
                setTotalPrice(sum);
                localStorage.setItem("cart",JSON.stringify(cart));
          }
    
        },[cart,data]);


    return (
        <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>title</th>
                <th>qty</th>
                <th>price</th>
            </tr>
        </thead>
        <tbody>
        {data.length > 0 && cart.map(items=>
            {
                const product = data.find(item=> item.id === items.id)
                return (
                    <tr key={items.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{items.qty}</td>
                        <td>{(items.qty * product.price).toLocaleString("id-ID",{styles:"currency",currency:"IDR"})}</td>
                     </tr>
                )
            }
      
         )}
         <tr>
            <td>Total Price</td>
            <td></td>
            <td></td>
            <td>{totalPrice}</td>
         </tr>
            
        </tbody>
    </table>
    )
}

export default TableCart;