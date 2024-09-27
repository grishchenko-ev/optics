import React from "react";
import { useCart } from "../Context";
import { Minus } from "./Minus";
import { Plus } from "./Plus";
import "./styles.scss";

export const Layout: React.FC<{ id: string }> = ({ id }) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useCart();
    const quantity = getItemQuantity(id);

    return (
        <div className="cart-controls">
            {quantity === 0 ? (
                <button
                    type="button"
                    onClick={() => increaseCartQuantity(id)}
                    className="bt more-bt"
                >
                    <span className="fl" />
                    <span className="sfl" />
                    <span className="cross" />
                    <i />
                    <p>Додати до кошику</p>
                </button>
            ) : (
                <div className="btn-container">
                    <div className="align">
                        <button
                            type="button"
                            onClick={() => decreaseCartQuantity(id)}
                            className="cart-controls__btn_round"
                        >
                            <Minus />
                        </button>
                        <span className="fs-3">
                            <strong>{quantity}</strong> в кошику
                        </span>
                        <button
                            type="button"
                            onClick={() => increaseCartQuantity(id)}
                            className="cart-controls__btn_round"
                        >
                            <Plus />
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={() => removeFromCart(id)}
                        className="bt more-bt opposit"
                    >
                        <span className="fl" />
                        <span className="sfl" />
                        <span className="cross" />
                        <i />
                        <p>Видалити з кошику</p>
                    </button>
                </div>
            )}
        </div>
    );
};
