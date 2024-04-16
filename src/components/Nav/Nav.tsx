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
                <h1 className='heading'>Stardew Friends</h1>
                <section className='links'>
                    <NavLink to='/' id='home-link' >Home</NavLink>
                    <NavLink to='/besties' id='besties-link' className='vl'>Besties</NavLink>
                </section>
                {pathname === '/' && <Search search={search} setSearch={setSearch}/>}
            </nav>
            <hr/>
            {/* {pathname === '/' && <Search search={search} setSearch={setSearch}/>} */}
        </>
    )

}

export default Nav