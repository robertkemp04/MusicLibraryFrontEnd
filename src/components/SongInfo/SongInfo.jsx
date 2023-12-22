import { useEffect } from "react";
import "./SongInfo.css";
import axios from "axios";

const handleDelete = async (id) => {
  const res = await axios.delete("https://localhost:7155/api/songs/" + id);
};

const SongInfo = ({ songObj }) => {
  return (
    songObj && (
      <div className="flex-item">
        <h4>{songObj.title}</h4>
        <div>
          <div className="data-item">
            <span>Album</span>
            <span>{songObj.album}</span>
          </div>
          <div className="data-item">
            <span>Artist</span>
            <span>{songObj.artist}</span>
          </div>
          <div className="data-item">
            <span>Genre</span>
            <span>{songObj.genre}</span>
          </div>
          <div className="data-item">
            <span>Release Date</span>
            <span>{songObj.releaseDate}</span>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-danger" onClick={() => handleDelete()}>
              Delete Song
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default SongInfo;
