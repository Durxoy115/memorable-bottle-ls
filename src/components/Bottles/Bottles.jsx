import { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToLS, getStoredCart, removefromLS } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Fetch bottle data and restore the cart in one step
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => {
                setBottles(data);
                const storedCartIds = getStoredCart();
                if (storedCartIds.length > 0) {
                    const restoredCart = storedCartIds
                        .map(id => data.find(bottle => bottle.id === id))
                        .filter(item => item); // Remove any unmatched items
                    setCart(restoredCart);
                }
            });
    }, []);

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    };

    const handleRemoveFromCart = id => {
        // Remove the item with the matching ID
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removefromLS(id); // Ensure the item is also removed from localStorage
    };

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
            />
            <div className="bottle-container">
                {bottles.map(bottle => (
                    <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bottles;
