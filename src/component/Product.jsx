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
    const {price,onClick} = props;
    return (
       <div>
         <h3>{price}</h3>
         <button onClick={onClick}> Add to cart</button>
       </div>
    )
}

Product.Header = Header;
Product.Body = Body;
Product.Footer = Footer;


export default Product;