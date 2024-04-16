import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav className='nav-bar'>
                <h1>Stardew Friends</h1>
                <NavLink to='/' id='home-link'>Home</NavLink>
                <NavLink to='/besties' id='besties-link'>Besties</NavLink>
                {/* <input type='text' placeholder='Search' /> */}
            </nav>
            <hr/>
        </>
    )

}

export default Nav