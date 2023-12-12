const MusicTable = ({}) => {
    const songs = ['Mood Swings', 'Married Next Year', 'Through Da Storm', 'Righteous']
    const songItems = songs.map((song) => <div>{song}</div>)
    return ( <div>
        <h4>My Songs</h4>
        <div>
            {songItems}
        </div>
    </div> );
}
 
export default MusicTable;