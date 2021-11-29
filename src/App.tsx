
import { Redirect, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import List from './components/List.component';
import Details from "./components/Details.component";
import ShopContextProvider from './context/ShopContext';
import Login from './components/Login';
import Cart from './components/Cart';
import Signup from './components/Signup';
import OrderList from './components/OrderList';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/orders" component={OrderList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/list" component={List} />
          <Route path="/details/:id" component={Details}/>
        </Switch>
      </ShopContextProvider>
    </div>
  );
}

export default App;
