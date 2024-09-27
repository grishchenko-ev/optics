import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "modules/hooks/use-local-storage";

type CartProviderProps = {
    children: ReactNode;
};

export type CartItem = {
    id: string;
    quantity: number;
};

type CartContext = {
    getItemQuantity: (id: string) => number;
    increaseCartQuantity: (id: string) => void;
    decreaseCartQuantity: (id: string) => void;
    removeFromCart: (id: string) => void;
    cartQuantity: number;
    cartItems: CartItem[];
    clearCart: () => void;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
    return useContext(CartContext);
}
export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", []);

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    function getItemQuantity(id: string) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
    function increaseCartQuantity(id: string) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }
    function decreaseCartQuantity(id: string) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }
    function removeFromCart(id: string) {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id);
        });
    }

    function clearCart() {
        setCartItems([]);
    }

    return (
        <CartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItems,
                cartQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
