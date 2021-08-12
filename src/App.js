import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import CityProvider from './context/CityContext';
import FavoriteProvider from './context/FavoriteContext';
// Bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
       <CityProvider>
         <FavoriteProvider>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/favorites' component={Favorites}/>
          </Switch>
        </FavoriteProvider>
       </CityProvider>
    </BrowserRouter>
  );
};

export default App;