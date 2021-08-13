import { useState, useContext } from 'react';
// Context
import { FavoriteContext } from '../context/FavoriteContext';
// Components 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Favorites = () => {
  const [count, setCount] = useState(0);
  
  const favorite = useContext(FavoriteContext);

  // check remote function
  const handleClickRemoveFav = () => {
    favorite.setState(prevState => [...prevState, favorite.name])
  };

  const alert = () => {
    if (count === 3) {
      return (
        <div className='alert alert-danger' role='alert'>
          You already have 3 favorites !
        </div>
      );
    };
  };

    return (
      <div>
        <Navbar/>
        {alert}
          <div>Favorites :
            {favorite.state.map(city =>
            <div>
              <p>{city}</p>
              <button onClick={handleClickRemoveFav}>-</button>
            </div>)} 
          </div>
        <Footer/>
      </div>
    );
  };
  
  export default Favorites;