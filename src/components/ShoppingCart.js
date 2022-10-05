import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, delFromCart } from '../actions/shoppingActions';
import CartItem from './CartItem';
import ProductItem from './ProductItem';

const ShoppingCart = () => {

    const state = useSelector(state => state);

    const dispacth = useDispatch()

    const { products, cart } = state.shopping;

    return (
        <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <article className='box grid-responsive'>
                {products.map((product) => (<ProductItem key={product.id} data={product} addToCart={() => dispacth(addToCart(product.id))}></ProductItem>))}
            </article>
            <h3>Carrito</h3>
            <article className='box'>
                <button onClick={() => dispacth(clearCart())}>Limpiar carrito</button>
                {cart.map((item, index) => (<CartItem key={index} data={item} delOneFromCart={() => dispacth(delFromCart(item.id))} delAllFromCart={() => dispacth(delFromCart(item.id, true))}></CartItem>))}
            </article>
        </div>
    );
};

export default ShoppingCart;