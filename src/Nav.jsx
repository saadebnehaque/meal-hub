import reactLogo from './assets/react.svg';

function Nav() {

    return (
        <>
            <nav className='nav'>
                <div className='navRight'>
                    <img src={reactLogo} alt="React Logo" />
                    <h2>Meal Hub</h2>
                </div>
                <ul className='navLeft'>
                    <li>menu1</li>
                    <li>menu2</li>
                    <li>menu3</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;