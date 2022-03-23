import React, { useState } from 'react';
import { useEffect } from 'react';
import "./Cosmetic.css";

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