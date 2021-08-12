import { useContext } from 'react';
// Context
import { FavoriteContext } from '../context/FavoriteContext';
// Components 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Favorites = () => {
  const favorite = useContext(FavoriteContext);

  const handleClickRemoveFav = () => {
    favorite.setState(prevState => [...prevState, favorite.name])
  }

    return (
      <div>
        <Navbar/>
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