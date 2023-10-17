import { Link,} from 'react-router-dom'
import "../App.css";


function Nav() {

  return (
    <div>

            <ul className='nav-ui'>
            <li><Link to="/">Items</Link></li>
            <li><Link to="/add">Add Item</Link></li>
            </ul>
            
       
    </div>
  )
  }

export default Nav;