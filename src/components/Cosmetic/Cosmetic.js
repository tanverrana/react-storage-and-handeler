import React from 'react';

const Cosmetic = (props) => {
    //destructuring
    const { name, age } = props.cosmetic;
    return (
        <div>
            <h2>Buy this:{name} </h2>
            <p>Only for : ${age}</p>
        </div>
    );
};

export default Cosmetic;