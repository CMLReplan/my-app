export default function Nav() {
  return (
      <nav className="nav-container">
        <div className="logo">
          <img src="/images/icons_assets/Logo.svg" alt="Little Lemon Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="home">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="menu">Menu</a></li>
          <li><a href="reservations">Reservations</a></li>
          <li><a href="order">Order Online</a></li>
          <li><a href="login">Login</a></li>
        </ul>
      </nav>
  );
}