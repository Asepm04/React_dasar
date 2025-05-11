import Product from '../component/Product'
import {useState,useEffect} from 'react'
import { getProduct } from '../services/product.service'
import {  Login } from '../hooks/useLogin'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice'
import TableCart from '../component/TableCart'


const ProductCard = () =>
{
    const auth = Login();
    const [data,setData] = useState([]);
    const dispatch = useDispatch()


    useEffect(()=>
    {
        getProduct(data=>
        {
            setData(data);
        }
        );
    });

    


    return (
        <div>
            <h1>{auth}</h1>
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
                        <Product.Footer id={"/products/"+item.id}  price={item.price.toLocaleString("id-ID",{styles:"currency",currency:"IDR"})}
                         onClick={()=>{dispatch(addToCart({id:item.id,qty:1}))}}/>
                    </div>
                
                )
            }
        </Product>

        <TableCart data={data}/>
  
        

        </div>

        
    )
}

export default ProductCard;