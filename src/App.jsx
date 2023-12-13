import "./App.css";
import Header from './components/Header/Header'
import MusicTable from "./components/MusicTable/MusicList";
import SongInfo from "./components/SongInfo/SongInfo";

function App() {
  return <div className="App">
    <Header/>
    <MusicTable/>
    <SongInfo title="Righteous" album="Legends Never Die" artist="Juice WRLD" genre="Hip-Hop" releaseDate="April 23 2020" />
  </div>;
}

export default App;
