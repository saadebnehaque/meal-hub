import { use, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Food from "../Food/Food";
import Cart from "../cart/Cart";

const FoodSection = ({ mealsPromises }) => {
    const { meals } = use(mealsPromises);
    const [cart, setCart] = useState([]);
    const addToCart = (food) => {
        setCart([...cart, food]);

    };
    const handleOrder = () => {
        setCart([]);
        cart.length === 0 ? toast.error('Empty Order') : toast.success('Order succsesful')


    };
    return (
        <div className="mainContainer">
            <div className="foodContainer">
                {
                    meals.map(food => <Food food={food} key={food.idMeal} addToCart={addToCart}></Food>)
                }
            </div>
            <Cart carts={cart} handleOrder={handleOrder}></Cart>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default FoodSection;