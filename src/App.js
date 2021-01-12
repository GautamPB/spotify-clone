import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LeftBar from './components/Leftbar'
import Navbar from './components/Navbar'
import FriendSection from './components/FriendSection'
import Login from './components/Login'
import { useEffect } from 'react';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          action: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      //any cleanup operations go in here
      unsubscribe()
    }

  }, []) //runs once when app reloads because second argument is empty

  console.log("User is >>>>", user)

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
