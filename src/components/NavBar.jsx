
const NavBar = ({ element, children }) => {

    return (
        <nav className="nav-bar">
            {children}
            {element}

        </nav>
    );
}

export default NavBar;