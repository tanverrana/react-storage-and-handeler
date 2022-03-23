import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

//import add from '../../utilities/calculate';

const Cosmetics = () => {
    const cosmetics = [
        {
            "_id": "623a6b51521e580f9ec8e9ce",
            "age": 37,
            "eyeColor": "brown",
            "name": "Helene Romero"
        },
        {
            "_id": "623a6b5113b7f5ced75b1b91",
            "age": 33,
            "eyeColor": "blue",
            "name": "Norman Hancock"
        },
        {
            "_id": "623a6b518808394916246148",
            "age": 34,
            "eyeColor": "brown",
            "name": "Watkins Robertson"
        },
        {
            "_id": "623a6b5196e49c84040a8b27",
            "age": 28,
            "eyeColor": "green",
            "name": "Hooper Ferrell"
        },
        {
            "_id": "623a6b512516328ecf2cb997",
            "age": 25,
            "eyeColor": "green",
            "name": "Oliver Jacobs"
        },
        {
            "_id": "623a6b51f69451fe8514da79",
            "age": 22,
            "eyeColor": "green",
            "name": "Donaldson Pruitt"
        },
        {
            "_id": "623a6b51accf96390354f425",
            "age": 36,
            "eyeColor": "green",
            "name": "Alta Maxwell"
        }
    ]
    return (
        <div>
            <h1>Welcome to my Cosmetics.</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic._id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }

        </div >
    );
};

export default Cosmetics;