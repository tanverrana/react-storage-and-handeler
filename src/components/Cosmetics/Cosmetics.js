import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

//import add from '../../utilities/calculate';

const Cosmetics = () => {
    const cosmetics = [
        { id: 1, name: "Alta", price: 100 },
        { id: 2, name: "Payel", price: 200 },
        { id: 3, name: "malish", price: 300 },
        { id: 4, name: "Balish", price: 400 },
        { id: 5, name: "nalish", price: 500 },
    ]
    return (
        <div>
            <h1>Welcome to my Cosmetics.</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }

        </div >
    );
};

export default Cosmetics;