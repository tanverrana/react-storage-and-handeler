import { addToDb, removeFromDb } from '../../utilities/fakedb';
import "./Cosmetic.css";

const Cosmetic = (props) => {

    //destructuring
    const { name, age, _id } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }

    const removeFromCart = id => {
        removeFromDb(id);
    }

    const addToCartWithParam = () => addToCart(_id);
    return (
        <div className="product">
            <h2>Buy this:{name} </h2>
            <p>Only for : ${age}</p>
            <p>ID: ${_id}</p>
            <button onClick={addToCartWithParam}>Add to cart</button>
            <button onClick={() => addToCart(_id)}>Add to cart 2</button>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;