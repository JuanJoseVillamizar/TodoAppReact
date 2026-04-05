import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Todo App</Link>
      </div>
      <div className="navbar-links">
        <button className="nav-link">All</button>
        <button className="nav-link">Pending</button>
        <button className="nav-link">Completed</button>
      </div>
    </nav>
  )
}

export default NavBar
