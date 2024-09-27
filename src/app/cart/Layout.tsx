import { useDataApi } from "app/use-data-api";
import React from "react";
import { useHistory } from "react-router-dom";
import { CartItem, useCart } from "./Context";
import { Form } from "./Form";
import { Item } from "./Item";
import "./styles.scss";

const sortedItems = (items: Array<CartItem>) => {
    return items.sort(function (a, b) {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        return 0;
    });
};

export const Layout = () => {
    const history = useHistory();
    const { cartItems } = useCart();
    const items = sortedItems(cartItems);

    React.useEffect(() => {
        if (cartItems.length === 0) {
            history.push("/");
        }
    }, [cartItems]);

    return (
        <div className="container">
            <div className="cart">
                <Form orderData={items} />
                {items.map(({ id }) => (
                    <Item key={id} src={id} />
                ))}
            </div>
        </div>
    );
};
