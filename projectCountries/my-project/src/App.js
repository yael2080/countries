import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Routers from './components/routers';
import { Provider } from 'react-redux';
import store from './redux/store';
import Countries from './components/countries'
import MyCountries from './components/myCountries'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import homeImg from './img/homeImg.jpg';

// import AllCountries from './components/allCountries';

function App() {
  return (
    <div className="App">
       <Provider store={store}>
          <img  className="im1"  src={homeImg} alt="homeImg"  />  
           <Login></Login>
           <Routers></Routers>

      </Provider>
    </div>
  );
}

export default App;
