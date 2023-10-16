import { Link, useNavigate } from 'react-router-dom'
import "../App.css";
// import image from '../images/logo.png'

function Nav() {

  return (
    <div>
      {/* <img className='nav-logo' src={image} alt='logo'></img> */}
            <ul className='nav-ui'>
            <li><Link to="/">Items</Link></li>
            <li><Link to="/add">Add Item</Link></li>
            <li> <Link to="/update/:id">Update Item</Link></li>
            </ul>
            {/* <li><Link to="/signup" onClick={logout}>Logout ({ JSON.parse(auth).name})</Link></li> */}
       
    </div>
  )
  }

export default Nav;