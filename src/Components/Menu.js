import '../CSS/Menu.css'
import { Outlet, Link } from "react-router-dom";

function Menu() {
    return(
        <>
        <div className="menu">
        <h1 className='menuHeader'>IJ</h1>
        <Link  className='menuButton' to="/">about me</Link>
        <br/>
        <Link className='menuButton' to="/MyWork">recent work</Link>
        <br/>
        <Link className='menuButton' to="/Contact">contact</Link>
        </div>
        <Outlet />
        </>
    )
}

export default Menu