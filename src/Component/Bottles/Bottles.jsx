import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('Bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    return (
        <div>
            <h3>Total Botel: {bottles.length}</h3>
            <div className="bottles">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>) 
                }
            </div>
        </div>
    );
};

export default Bottles;