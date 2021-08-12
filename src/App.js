import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/favorites' component={Favorites}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;