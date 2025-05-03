import { useEffect,useState } from 'react';
import  {useParams} from 'react-router-dom'
import { getDetailProduct } from '../services/product.service';
const Detail = () =>
{
    const {id} = useParams();
    const [dataa,setDataa] = useState({})

    useEffect(()=>
        {
           getDetailProduct(id,(data)=>
            {
                setDataa(data);
                console.log(data)
            })

        },[id]);
    return(
        <>
        <img src={dataa.image} alt="" />
        <p>detail : {id}</p>
        <p>{dataa.title}</p>
        <p>{dataa.category}</p>
        <p>{dataa.price}</p>
        </>

    )
}

export default Detail;