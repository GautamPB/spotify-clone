import './App.css';
import LeftBar from './components/Leftbar'
// import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import FriendSection from './components/FriendSection'

function App() {
  return (
    <div className="App">
      <div className='App__homePage'>
        <LeftBar className='leftBar' />
        <Navbar />
        <FriendSection className='friendSection' />
      </div>
    </div>
  );
}

export default App;
