/* Local Storage */

// 1
const getStoreCart = () => {
    const storCartString = localStorage.getItem('cart');
    if (storCartString) {
        return JSON.parse(storCartString);
    }
    return []
};

// 3
const saveToLs = cart => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify)
}

// 2
// Add to local Card
const addToLs = id => {
    const cart = getStoreCart();
    cart.push(id);
    saveToLs(cart);
}

const removeFromLs = id => {
    const cart = getStoreCart();
    // Removing every id
    const remaining = cart.filter(idx => idx !== id)
    saveToLs(remaining);
}

export {addToLs, getStoreCart, removeFromLs}












// const add = (first, second) => {
//     return first + second;
// }

// const multiply =(first, second) => {
//     return first * second;
// }

// const divideTheSumWithMulti = (sum, multi) => {
//     return multi / sum
// }

// export { add, multiply, divideTheSumWithMulti}
