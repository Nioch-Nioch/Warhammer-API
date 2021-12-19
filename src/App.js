import Navigation from './components/Navigation';
import Home from './components/Home';
import Shop from './components/Shop'

import { BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom'


function App() {

  return (
    <Router>  
      <div className="App">
        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
          </Switch>
        </div>
    </div>

    </Router>
    
  );
}

export default App;
