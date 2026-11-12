import './Navbar.css'
import { Bookmark, Film, House, Menu, Monitor, Search, UserRound } from 'lucide-react'

function Navbar() {
    return (
        <header className='navbar'>

            <div className="navbar__logo">
                <a className='logo__nocturne' href="#">
                    <img src="/public/images/nocturne-logo.png" alt="Nocturne logo" />
                </a>
            </div> 

            <nav className="navbar__links">
                <ul>
                    <li><a className='links__link navbar__link--active' href="#"><House /> Home</a></li>
                    <li><a className='links__link' href="#"><Film /> Movies</a></li>
                    <li><a className='links__link' href="#"><Monitor /> Series</a></li>
                    <li><a className='links__link' href="#"><Bookmark /> My List</a></li>
                </ul>
            </nav>

            <div className="navbar__actions">

                <button type="button" className="actions__search" aria-label="Search movies">
                    <Search />
                </button>


                <button type="button" aria-label="Profile">
                    <UserRound/>
                </button>

                <a className='actions__menu' href="#"><Menu /></a>

            </div>

        </header>
    )
}

export default Navbar