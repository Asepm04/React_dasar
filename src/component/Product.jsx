import {Link}  from 'react-router-dom'

const Product = (props) =>
{
    const {children} = props;
    return (
        <div>
            {children}
        </div>
    )
}

const Header = (props) =>
{
    const {title} = props;
    return (
        <h1>{title}</h1>
    )
}

const Body = (props) =>
{
    const {children} = props;
    return(
        <div>
            {children}
        </div>
    )
}

const Footer = (props) =>
{
    const {price,onClick,id} = props;
    return (
        <div>
            <Link  to={id} ><h3>{price}</h3></Link>
         <button onClick={onClick} >add to cart</button>
       </div>
    )
}

Product.Header = Header;
Product.Body = Body;
Product.Footer = Footer;


export default Product;