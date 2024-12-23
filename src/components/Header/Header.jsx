import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Company Name */}
        <div className="logo">H2O</div>

        {/* Search Box */}
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
        </ul>

        {/* Icons */}
        <div className="icons">
          <span className="icon" title="Notifications">🔔</span>
          <span className="icon" title="User Profile">👤</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
