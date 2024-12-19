import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const{id, name, img, price} = bottle;
    return (
        <div className='bottle'>
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <h4>Price: ${price}</h4>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;