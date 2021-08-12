import { useContext, useEffect, useState } from 'react';
// Components 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Context
import { CityContext } from '../context/CityContext';
import { FavoriteContext } from '../context/FavoriteContext';
// Axios
import Axios from 'axios';
// CSS
import './Home.modules.css';

const Home = () => {
  const [data, setData] = useState({});

  const cityValue = useContext(CityContext);
  const favorite = useContext(FavoriteContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue.state}&appid=74b5d8b8869d0489aaa438eaee7e20c4`)
        console.log(res)
        setData(res.data)
    }
    fetchData(  )
  }, [cityValue]);

  const onChangeCity = (e) => {
    cityValue.setState(e.target.value)
    console.log(e.target.value)
  };

  const handleAddFavorites = () => {
    favorite.setState(prevState => [...prevState, data.name])
  };

  if (!data) {
    return (null);
  };

    return (
      <div>
        <Navbar/>
          <div className='input flex-input'>
            <span><img src='./img/loupe.png' alt='loupe icon' style={{ width: '1rem' }}/></span>
            <input type="text" className='border-none margin-left-input' placeholder="Search" onChange={onChangeCity}/>
          </div>

          {(data.name) ?           
          <div className='container'>
            <p>{data.name}</p>
            <p>Weather : {data.weather[0].main}</p>
            <p>Temperature : {data.main.temp}</p>
            <p>Min temperature : {data.main.temp_min}</p>
            <p>Max temperature : {data.main.temp_max}</p>
            <p>Humidity : {data.main.humidity}</p>
            <button onClick={handleAddFavorites}>+</button>
          </div> : <p></p> }


        <Footer/>
      </div>
    );
  };
  
  export default Home;