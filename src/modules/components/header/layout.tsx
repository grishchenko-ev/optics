import { useHistory } from "react-router-dom";
import { CartLink } from "./cart-link/CartLink";
import { ClearCartButton } from "./ClearCartButton";
import "./styles.scss";

const GoBack = () => {
    return (
        <button type="button" onClick={useHistory().goBack}>
            Назад
        </button>
    );
};

export const Layout = () => {
    const pathName = useHistory().location.pathname;

    return (
        <header>
            <div className="container justify">
                {pathName === "/" ? (
                    <img
                        src={require("./logo.png")}
                        width="60"
                        height="60"
                        alt="Logo"
                    />
                ) : (
                    <GoBack />
                )}
                <div className="justify v-center">
                    {pathName === "/cart" ? <ClearCartButton /> : <CartLink />}
                    <ul className="contacts">
                        <li>
                            <a href="tel:+380674694546">
                                <span>Олександр:</span>
                                <span>+380 67 469 4546</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+380933736310">
                                <span>Євген:</span>
                                <span>+380 93 373 6310</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+380933736310">
                                <span>Андрій:</span>
                                <span>+380 98 798 8111</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
