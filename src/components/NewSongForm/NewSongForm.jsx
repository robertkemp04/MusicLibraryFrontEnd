import React, { useState } from "react";
import TextField from "../TextField/TextField";

const NewSongForm = ({ OnNewSong }) => {
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      album,
      artist,
      genre,
      releaseDate,
    };

    OnNewSong(formData);
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
