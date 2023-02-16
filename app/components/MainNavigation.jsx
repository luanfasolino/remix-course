import { NavLink } from "@remix-run/react";

//NewLink is the same of Link with the difference that they 
//show the active css class, Like will apply an css when the item
//is selected. 
function MainNavigation() {
    return (
        <nav id="main-navigation">
            <ul>
                <li className="nav-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/notes">My Notes</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation;