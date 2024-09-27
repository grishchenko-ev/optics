import { useCart } from "app/cart/Context";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";

export const CartLink = () => {
    const { cartQuantity } = useCart();
    const isCartEmpty = cartQuantity === 0;

    return (
        <Link
            to="/cart"
            className={`cart-link ${isCartEmpty ? "disabled" : ""}`}
        >
            <Cart />
            <div className="quantity">
                <span>{cartQuantity}</span>
            </div>
        </Link>
    );
};
