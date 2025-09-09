import { Link } from 'react-router-dom';

function Nav() {
  return (
      <nav
        className="nav-container"
        aria-label='Main Navigation'
        role="navigation"
      >
        <div className="logo">
          <Link to="/" aria-label='Little Lemon Homepage'>
            <img
              src="/images/icons_assets/Logo.svg"
              alt="Little Lemon Logo"
            />
          </Link>
        </div>
        <ul className="nav-links" role="menubar" aria-label="Main Menu">
          <li role="none">
            <Link to="/" role="menuitem" aria-current="page" aria-label="Go to Home">
              Home
            </Link>
          </li>
          <li role="none">
            <Link to="/about" role="menuitem" aria-label="Learn more About us">
              About
            </Link>
          </li>
          <li role="none">
            <Link to="/menu" role="menuitem" aria-label="View our Menu">
              Menu
            </Link>
          </li>
          <li role="none">
            <Link to="/booking" role="menuitem" aria-label="Make a Reservation">
              Reservations
            </Link>
          </li>
          <li role="none">
            <Link to="/order" role="menuitem" aria-label="Order food Online">
              Order Online
            </Link>
          </li>
          <li role="none">
            <Link to="/login" role="menuitem" aria-label="Login to your Account">
              Login
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;