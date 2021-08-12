import { Link } from 'react-router-dom';
// CSS
import './Navbar.modules.css';

const Navbar = () => {
    return (
      <div className='navbar flex-nb'>
        <Link to='/' className='text margin-left'>Home</Link>
        <Link to='/favorites' className='text margin-left'>Favorites</Link>
      </div>
    );
  };
  
  export default Navbar;