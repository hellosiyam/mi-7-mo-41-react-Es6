import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLs, getStoreCart } from "../../Utils/calculate";

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
        if (bottles.length > 0) {
         const storeCard = getStoreCart();
         console.log(storeCard);
          
        }
        
    }, [bottles])

    const handelAddToCard = (bottle) => {
        const newBottle = [...addBottle, bottle];
        setBottle(newBottle);
        addToLs(bottle.id)
    }

    return (
        <div>
            <h3>Total Botel: {bottles.length}</h3>
            <h4>Add to Card : {addBottle.length} </h4>
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