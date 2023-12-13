import SongItem from "../SongItem/SongItem";

const MusicTable = ({}) => {
  const songs = [
    "Mood Swings",
    "Married Next Year",
    "Through Da Storm",
    "Righteous",
  ];
  const songItems = songs.map((song) => <SongItem key={song} title={song} />);
  return (
    <div className="flex-item">
      <h4>My Songs</h4>
      <div>{songItems}</div>
    </div>
  );
};

export default MusicTable;
