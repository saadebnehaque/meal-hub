

const Food = ({ food, addToCart }) => {
    return (
        <div className="foodCard">
            <div>
                <img src={food.strMealThumb} alt="" />
            </div>
            <div>
                <h2 className="foodName">{food.strMeal}</h2>
            </div>
            <button onClick={()=>addToCart(food)}>Add To Cart</button>
        </div>
    );
};

export default Food;