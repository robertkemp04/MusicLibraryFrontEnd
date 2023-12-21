import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicList";
import SongInfo from "./components/SongInfo/SongInfo";
import NewSongForm from "./components/NewSongForm/NewSongForm";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7155/api/songs");
      //console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetchSongs request: ", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const selectedSong = songs[activeIndex];

  return (
    <div className="App">
      <Header />

      <div className="flex-container">
        <MusicTable
          songs={songs}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <SongInfo songObj={selectedSong} />
        <NewSongForm OnNewSong={fetchSongs}/>
      </div>
    </div>
  );
}

export default App;
