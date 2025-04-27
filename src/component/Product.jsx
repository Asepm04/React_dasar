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
    const {price} = props;
    return (
        <h3>{price}</h3>
    )
}

Product.Header = Header;
Product.Body = Body;
Product.Footer = Footer;


export default Product;