import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to="/">
                <img style={{ height: 45 }} src="https://img.favpng.com/6/5/12/ecommerce-logo-png-favpng-c9XwFQHwsmZeVNHU6BRWQgabB.jpg" alt="logo" />
            </Link>
            <div>
                <Link to='/' className="navLink">Home</Link>
                <Link to='/cart' className="navLink">Cart</Link>
                <span className="cartCount">
                    Cart items : {items.length}
                </span>
            </div>
        </div>
    )
}

export default Navbar;

