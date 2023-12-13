import "./App.css";
import Header from "./components/Header/Header";
import MusicTable from "./components/MusicTable/MusicList";
import SongInfo from "./components/SongInfo/SongInfo";
import NewSongForm from "./components/NewSongForm/NewSongForm";
import React, { useState, useEffect } from "react";
import initData from "./data/data";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(initData);
  }, []);

  const handleNewSong = (newSong) => {
    const updatedSong = [...songs, newSong];
    setSongs(updatedSong);
  };

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
        <MusicTable songs={songs} />
        <SongInfo songObj={selectedSong} />
        <NewSongForm OnNewSong={handleNewSong} />
      </div>
    </div>
  );
}

export default App;
