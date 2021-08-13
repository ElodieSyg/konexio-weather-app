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
// Gif
//import Sun from './gif/soleil.gif';

const Home = () => {
  const [data, setData] = useState({});

  const cityValue = useContext(CityContext);
  const favorite = useContext(FavoriteContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityValue.state}&appid=74b5d8b8869d0489aaa438eaee7e20c4`);
        console.log(res)
        setData(res.data)
    }
      fetchData()
  }, [cityValue])

  useEffect(() => {
    console.log('componentDidMount')
    console.log(cityValue.state)
    console.log(data.name)
  }, [cityValue.state, data.name])

  const onChangeCity = (e) => {
    cityValue.setState(e.target.value)
    console.log(e.target.value)
  }; 

  const handleAddFavorites = () => {
    favorite.setState(prevState => [...prevState, data.name])
  };

  const gifWeather = () => { 
    if (data.weather[0].main === 'Clear') {
      return (<img src='./gif/soleil.gif' alt='sun gif' width={{ width: '10px' }}/>)
    } else if (data.weather[0].main === 'Rain') {
      return (<img src='./gif/pluie.gif' alt='sun gif' width={{ width: '10px' }}/>)
    } else if (data.weather[0].main === 'Clouds') {
      return (<img src='./gif/clouds.gif' alt='sun gif' width={{ width: '500px' }}/>)
    }
  };

  if (!data) {
    return (null);
  };

  // faire une comparaison de match avec ue regex pour changer le background 

    return (
      <div>
        <Navbar/>
          <div className='input-container flex-input'>
            <div className='input'>
              <span><img src='./img/loupe.png' alt='loupe icon' style={{ width: '1rem', marginLeft: '1rem' }}/></span>
              <input type="text" className='border-none margin-left-input' placeholder="Search" onChange={onChangeCity}/>
            </div>
          </div>

          {(cityValue.state === data.name)
          ? <div className='container'>
          <p>{data.name}</p>
          {gifWeather()}
          <p>Weather : {data.weather[0].main}</p>
          <p>Temperature : {data.main.temp}</p>
          <p>Min temperature : {data.main.temp_min}</p>
          <p>Max temperature : {data.main.temp_max}</p>
          <p>Humidity : {data.main.humidity}</p>
          <button onClick={handleAddFavorites}>+</button>
            </div>
          : null
          }   

        <Footer/>
      </div>
    );
  };
  
  export default Home;