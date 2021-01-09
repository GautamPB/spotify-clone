import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LeftBar from './components/Leftbar'
import Navbar from './components/Navbar'
import FriendSection from './components/FriendSection'
import Login from './components/Login'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path = '/login'>
          <Login />
        </Route>

        <Route path = '/'>
          <div className='App__homePage'>
            <LeftBar />
            <Navbar />
            <FriendSection />
          </div>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
