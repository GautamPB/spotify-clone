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
            <Song 
            song_image = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
            song_title = 'Queen Greatest Hits'
            />
            <Song 
            song_image = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
            song_title = 'Queen Greatest Hits'
            />
            <Song 
            song_image = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
            song_title = 'Queen Greatest Hits'
            />
            <Song 
            song_image = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
            song_title = 'Queen Greatest Hits'
            />
          </div>

          <div className = 'songRow'>
          <Song 
            song_image = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
            song_title = 'Queen Greatest Hits'
            />
            <Song 
            song_image = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
            song_title = 'Queen Greatest Hits'
            />
            <Song 
            song_image = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
            song_title = 'Queen Greatest Hits'
            />
            <Song 
            song_image = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
            song_title = 'Queen Greatest Hits'
            />
          </div>

          <div className = 'songRow'>
            <Song 
            song_image = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
            song_title = 'Queen Greatest Hits'
            />
            <Song 
            song_image = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
            song_title = 'Queen Greatest Hits'
            />
            <Song 
            song_image = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
            song_title = 'Queen Greatest Hits'
            />
            <Song 
            song_image = 'https://pbs.twimg.com/media/Dr-L6ixWoAAU9k0.jpg'
            song_title = 'Queen Greatest Hits'
            />
          </div>
        </div>
        <FriendSection className='friendSection' />
      </div>
    </div>
  );
}

export default App;
