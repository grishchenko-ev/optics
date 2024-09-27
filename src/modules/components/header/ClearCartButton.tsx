import { useCart } from "app/cart/Context";
import { useHistory } from "react-router-dom";

export const ClearCartButton = () => {
    const { clearCart } = useCart();
    const history = useHistory();
    const handleStorageClear = () => {
        clearCart();
        history.push("/");
    };
    return (
        <button
            type="button"
            className="btn btn_outline"
            onClick={handleStorageClear}
        >
            Очистити корзину
        </button>
    );
};
