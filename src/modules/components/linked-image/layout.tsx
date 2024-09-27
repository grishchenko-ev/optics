import * as React from "react";
import { Link } from "react-router-dom";
import * as CartControls from "app/cart/controls";

type ImageProps = {
    src: string;
    withCart?: boolean;
};

export const Layout: React.FC<ImageProps> = ({ src, withCart }) => {
    const cutSrc = src.replace(/\.[^/.]+$/, "");
    const vendorCode = cutSrc.split("/").pop();

    if (!vendorCode) {
        return null;
    }

    return (
        <>
            <Link to={"/" + cutSrc}>
                <img
                    src={process.env.FULL_API_URL + "/" + src}
                    width="246"
                    height="138"
                    alt={cutSrc}
                />
                <h3>{vendorCode}</h3>
            </Link>
            {withCart && <CartControls.Layout id={cutSrc} />}
        </>
    );
};
