import "./SongInfo.css";

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
        </div>
      </div>
    )
  );
};

export default SongInfo;
