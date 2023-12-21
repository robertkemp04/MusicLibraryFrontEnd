import React, { useState } from "react";
import TextField from "../TextField/TextField";
import axios from "axios";

const NewSongForm = ({ OnNewSong }) => {
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      album,
      artist,
      genre,
      releaseDate,
    };

    try {
      const response = await axios.post(
        "https://localhost:7155/api/songs",
        formData
      );
      if (response.status === 201) {
        OnNewSong();
      }
    } catch (error) {
      console.warn("Error submitting new movie form: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Song</h4>
      <TextField label="Title" value={title} onChange={setTitle} />
      <TextField label="Album" value={album} onChange={setAlbum} />
      <TextField label="Artist" value={artist} onChange={setArtist} />
      <TextField label="Genre" value={genre} onChange={setGenre} />
      <TextField
        label="Release Date"
        value={releaseDate}
        onChange={setReleaseDate}
      />
      <button type="submit">Add Song</button>
    </form>
  );
};

export default NewSongForm;
