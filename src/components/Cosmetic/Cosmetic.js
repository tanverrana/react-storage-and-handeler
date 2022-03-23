import React, { useState } from 'react';
import { useEffect } from 'react';
import "./Cosmetic.css";

const Cosmetic = (props) => {

    //destructuring
    const { name, age, _id } = props.cosmetic;
    const addToCart = (id) => {
        console.log("Item add to cart", id);
    }

    const addToCartWithParam = () => addToCart(_id);
    return (
        <div className="product">
            <h2>Buy this:{name} </h2>
            <p>Only for : ${age}</p>
            <p>ID: ${_id}</p>
            <button onClick={addToCartWithParam}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;