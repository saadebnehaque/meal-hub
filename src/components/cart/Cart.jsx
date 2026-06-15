

const Cart = ({ carts, handleOrder }) => {

    return (
        <div className="cartContainer">
            <h1>Cart</h1>
            <ul style={{ padding: '10px' }}>
                {
                    carts.map((cart, i) => <li key={i}>{cart.strMeal}</li>)
                }
            </ul>
            <button onClick={handleOrder}>Order Now</button>
        </div>
    );
};

export default Cart;