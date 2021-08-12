// Components 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// CSS
import './Home.modules.css';

const Home = () => {
    return (
      <div>
        <Navbar/>
          <div className='input'>
            <span><img src='./img/loupe.png' alt='loupe icon' style={{ width: '1rem' }}/></span>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        <Footer/>
      </div>
    );
  };
  
  export default Home;