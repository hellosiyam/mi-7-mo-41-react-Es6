import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLs, getStoreCart, removeFromLs } from "../../Utils/calculate";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [addBottle, setBottle] = useState([]);

    useEffect(() => {
        fetch('Bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, []);

    useEffect(() => {
        console.log('Store card reload', bottles.length);
        if (bottles.length) {
            const storeCard = getStoreCart();
            console.log(storeCard, bottles);
            
            const saveCart = []
            for(const id of storeCard){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    saveCart.push(bottle)
                }
            }
            console.log('Bottle add to the cart:', saveCart);
            setBottle(saveCart);
        }
        
    }, [bottles])

    const handelAddToCard = bottle => {
        const newBottle = [...addBottle, bottle];
        setBottle(newBottle);
        addToLs(bottle.id)
    }

    const handelRemoveToCard = id => {
        const remainingCart = addBottle.filter(bottle => bottle.id !== id)
        setBottle(remainingCart)
    }
    return (
        <div>
            <h3>Total Botel Available: {bottles.length}</h3>
            <Cart cart={addBottle} handelRemoveToCard={handelRemoveToCard}></Cart>
            <div className="bottles">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id} 
                        bottle={bottle}
                        handelAddToCard={handelAddToCard}
                        ></Bottle>) 
                }
            </div>
        </div>
    );
};

export default Bottles;