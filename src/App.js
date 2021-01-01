import './App.css';
import LeftBar from './components/Leftbar'
import MainContent from './components/MainContent'
import FriendSection from './components/FriendSection'
import Song from './components/Song'

function App() {
  return (
    <div className="App">
      <div className='App__homePage'>
        <LeftBar className='leftBar' />
        <MainContent className='mainContent' />
        <div className = 'songs'>
          <div className = 'songRow'>
            <Song />
            <Song />
            <Song />
            <Song />
          </div>

          <div className = 'songRow'>
            <Song />
            <Song />
            <Song />
            <Song />
          </div>
        </div>
        <FriendSection className='friendSection' />
      </div>
    </div>
  );
}

export default App;
