import React from 'react';

import './Sunglass.css';
import Watch from '../Watch/Watch';
import  { add, multiply, divideTheSumWithMulti as divide } from '../../Utils/calculate';

const Sunglass = () => {
    const first = 55;
    const second = 45;
    const sum = add(first, second);
    const multi = multiply(first, second);
    const dived = divide(sum, multi)

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;