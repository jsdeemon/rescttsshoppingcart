import CartItem from "../CartItem/CartItem"; 
// Styles 
import {Wrapper} from './Cart.styles'; 
// Types
import { CartItemType } from "../App"; 

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    const calculateTotal = (items: CartItemType[]) => 
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

    return (
        <Wrapper>
            <h2>Your shopping cart</h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}

            { cartItems.map(item => (
                <CartItem 
              key={item.id} 
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
                />
            ))}

            <h2>Total: ${calculateTotal(cartItems).toLocaleString()}</h2>
        </Wrapper>
    );
}


export default Cart;