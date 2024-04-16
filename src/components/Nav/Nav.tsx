import './Nav.css';
import { NavLink, useLocation } from 'react-router-dom';
import Search from '../Search/Search';

interface Props {
    search: string
    setSearch: (query: string) => void
}

function Nav({search, setSearch}: Props) {
    const { pathname } = useLocation()
    return (
        <>
            <nav className='nav-bar'>
                <h1>Stardew Friends</h1>
                <NavLink to='/' id='home-link' className='links'>Home</NavLink>
                <NavLink to='/besties' id='besties-link' className='links'>Besties</NavLink>
                {pathname === '/' && <Search search={search} setSearch={setSearch}/>}
            </nav>
            <hr/>
        </>
    )

}

export default Nav