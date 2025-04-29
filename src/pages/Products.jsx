import Product from '../component/Product'
import {useState,useEffect} from 'react'
import { getProduct } from '../services/product.service';


const Products = () =>
{
    // const data = 
    // [
    //     {
    //         id:1,
    //         title:"sepatu baru",
    //         body : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus animi deserunt, 
    //                 amet aspernatur magni itaque a placeat dolores odio quae voluptatem 
    //                 praesentium quam eos sint eius illum repudiandae, enim doloremque!`,
    //         price : 1000000
    //     },
    //     {
    //         id:2,
    //         title :"sepatu lama",
    //         body : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus animi deserunt, 
    //                 amet aspernatur magni itaque a placeat dolores odio quae voluptatem 
    //                 praesentium quam eos sint eius illum repudiandae, enim doloremque!`,
    //         price : 2000000
    //     },
    //     {
    //         id:3,
    //         title: "sepatu bekas",
    //         body : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus animi deserunt, 
    //                 amet aspernatur magni itaque a placeat dolores odio quae voluptatem 
    //                 praesentium quam eos sint eius illum repudiandae, enim doloremque!`,
    //         price : 3000000
    //     }
    // ];


    const [cart,setCart] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0);
    const [data,setData] = useState([]);

    useEffect( ()=>
        {
            setCart(JSON.parse(localStorage.getItem("cart")) || []);
        },[]);

    useEffect(()=>
    {
        getProduct(data=>
        {
            console.log(data);
            setData(data);
        }
        );
    });

    const handleClick = (id) =>
    {
        setCart(prevCart =>
        {
            const existingQty = prevCart.find(item => item.id === id);
            if(existingQty)
            {
               return prevCart.map(items=> items.id === id ? {...items ,qty : items.qty+1} : {...items})
            }
            else
            {
                return [
                    ...prevCart,
                    {
                        id,
                        qty:1
                    }
                ]
            }
           
        } );
    }


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
        <div>
        <Product>
            { data.length > 0 &&
                data.map(item =>
                
                    <div key={item.id}>
                        <Product.Header  title={item.title}/>
                        <Product.Body >
                            <p>
                                {item.body}
                                {/* <img src={item.image} alt="" /> */}
                            </p>
                        </Product.Body>
                        <Product.Footer  price={item.price.toLocaleString("id-ID",{styles:"currency",currency:"IDR"})} onClick={()=>{handleClick(item.id)}}/>
                    </div>
                
                )
            }
        </Product>

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
        

        </div>

        
    )
}

export default Products;