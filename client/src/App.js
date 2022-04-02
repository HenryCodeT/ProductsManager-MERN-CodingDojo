import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import EditProduct from './views/EditProduct';
import Main from './views/Main';
import ShowProduct from './views/ShowProduct';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar/>
        <Switch>
          <Route exact path={"/:productId/edit"} render={(routeProps)=><EditProduct {...routeProps}/>}/>
          <Route exact path={"/:productId"} render={(routeProps)=><ShowProduct {...routeProps}/>} />
          <Route exact path={"/"} render={(routeProps)=><Main {...routeProps}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
