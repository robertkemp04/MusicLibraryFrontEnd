import SongItem from "../SongItem/SongItem";

const MusicTable = ({ songs = [], activeIndex, setActiveIndex }) => {
  const songItems = songs.map((song, i) => (
    <SongItem 
    key={song.title} 
    title={song.title} 
    activeIndex={activeIndex} 
    setActiveIndex={setActiveIndex} 
    index={i}
    />
  ));
  return (
    <div className="flex-item">
      <h4>My Songs</h4>
      <div>{songItems}</div>
    </div>
  );
};

export default MusicTable;
