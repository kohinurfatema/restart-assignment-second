const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">CS — Ticket System</div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Changelog</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="btn-new-ticket">+ New Ticket</button>
      </div>
    </nav>
  );
};

export default Navbar;
