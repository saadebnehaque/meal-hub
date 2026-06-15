import navImg from "../../assets/food.jpg"

const Nav = () => {
    return (
        <nav className="nav">
            <div className="navLeft">
                <img src={navImg} alt="" />
                <p>Meal Hub</p>
            </div>
            <div className="navRight">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Orders</p>
                <p>Blogs</p>
            </div>
        </nav>
    );
};

export default Nav;