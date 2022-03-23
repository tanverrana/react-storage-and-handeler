//Use local storage to cart data
const addToDb = id => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        console.log("Already exit");
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else {
        localStorage.setItem(id, 1);
    }

}

export { addToDb }