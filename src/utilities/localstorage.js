const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    
    return [];
}
const saveCartToLS = cart =>{
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
}
const removefromLS = id => {
    const  cart = getStoredCart();
    //removing every id
    const remaining = cart.filter(idx => idx!== id);
    saveCartToLS(remaining);
}

export {addToLS, getStoredCart,removefromLS};