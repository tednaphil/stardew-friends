import './Nav.css';
import { NavLink, useLocation } from 'react-router-dom';
import Search from '../Search/Search';
import type { Friend } from '../App/App';

interface Props {
    search: string
    setSearch: (query: string) => void
    besties: Friend[]
}

function Nav({search, setSearch, besties}: Props) {
    const { pathname } = useLocation()
    return (
        <header className='header'>
            <nav className='nav-bar'>
                <h1 className='heading'>Stardew Friends</h1>
                <section className='links'>
                    <NavLink to='/' id='home-link' >Home</NavLink>
                    <NavLink to='/besties' id='besties-link' className='vl'>{`Besties (${besties.length})`}</NavLink>
                </section>
                {pathname === '/' && <Search search={search} setSearch={setSearch}/>}
            </nav>
            <hr/>
        </header>
    )

}

export default Nav