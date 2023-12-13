import SongItem from "../SongItem/SongItem";

const MusicTable = ({ songs = [] }) => {
  const songItems = songs.map((song) => (
    <SongItem key={song.title} title={song.title} />
  ));
  return (
    <div className="flex-item">
      <h4>My Songs</h4>
      <div>{songItems}</div>
    </div>
  );
};

export default MusicTable;
