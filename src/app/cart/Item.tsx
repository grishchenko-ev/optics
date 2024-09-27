import React from "react";
import * as CartControls from "app/cart/controls";

type CartItemProps = {
    src: string;
};

export const Item: React.FC<CartItemProps> = ({ src }) => {
    const cutSrc = src.replace(/\.[^/.]+$/, "");
    const vendorCode = cutSrc.split("/").pop();
    const imgSrc =
        process.env.FULL_API_URL + "/" + src + "/" + vendorCode + ".jpg";
    const brandName = src.substring(0, src.indexOf("/"));
    return (
        <div className="cart-item">
            <img src={imgSrc} width="246" height="138" alt={src} />
            <div className="info">
                <h3>{brandName}</h3>
                <h4>{vendorCode}</h4>
            </div>
            <CartControls.Layout id={cutSrc} />
        </div>
    );
};
