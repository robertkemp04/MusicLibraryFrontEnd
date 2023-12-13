import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicList";
import SongInfo from "./components/SongInfo/SongInfo";

function App() {
  const selectedSong = {
    title: "Righteous",
    album: "Legends Never Die",
    artist: "Juice WRLD",
    genre: "Hip-Hop",
    releaseDate: "April 23 2020",
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MusicTable />
        <SongInfo songObj={selectedSong} />
      </div>
    </div>
  );
}

export default App;
