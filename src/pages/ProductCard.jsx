import Product from '../component/Product'
import {useState,useEffect} from 'react'

const ProductCard = () =>{
    const data = [
        {
            id:1,
            title:"sepatu baru",
            body :`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam nam, iusto dolorum praesentium error quidem voluptate inventore 
                    facilis fugiat tenetur soluta fugit! Quos non blanditiis voluptatibus. 
                    Atque quis autem suscipit?`,
            
            price:"1000.000"
        },
        {
            id:2,
            title:"sepatu lama",
            body :`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam nam, iusto dolorum praesentium error quidem voluptate inventore 
                    facilis fugiat tenetur soluta fugit! Quos non blanditiis voluptatibus. 
                    Atque quis autem suscipit?`,
            
            price:"1000.000"
        },
        {
            id:3,
            title:"sepatu bekas",
            body:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam nam, iusto dolorum praesentium error quidem voluptate inventore 
                    facilis fugiat tenetur soluta fugit! Quos non blanditiis voluptatibus. 
                    Atque quis autem suscipit?`,
            
            price:"1000.000"
        }
    ];

    

    const [cart,setCart]  = useState([]);

    const AddToCart = (id) =>
    {
        setCart(prevCart =>
        {
            const existingQty = prevCart.find(item => item.id === id);

            if(existingQty)
            {
                return  (
                    prevCart.map(item => item.id === id ? {...item, qty: item.qty+1 } : {...item})
                )
            }
            else
            {
                return  (
                    [
                        ...prevCart,
                        {
                            id,
                            qty:1
                        }
                    ]
                )
            }
        }
        )
        
    }
    useEffect(()=>
        {
            console.log(cart);
        },[cart]);


    return (
        <div>
            <h2>{localStorage.getItem('email')}</h2>
            {data.map((product)=>
            <Product key={product.id}>
            <Product.Header title={product.title}/>
            <Product.Body>
                <p>
                    {product.body}
                </p>
            </Product.Body>
            <Product.Footer  price={product.price}/>
            
            <button value={product.id} onClick={()=>{AddToCart((product.id))}}>
                add to cart

            </button>
        </Product>)}

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
            {cart.map(item =>
                {
                    const products = data.find(items => items.id === item.id);
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{products.title}</td>
                            <td>{item.qty}</td>
                         </tr>
                    )
                }
                
                )}
            </tbody>
        </table>

                
         
            
        </div>
        
    )
}
export default ProductCard;