const SongInfo = ({title, album, artist, genre, releaseDate}) => {
    return ( <div>
        <h4>{title}</h4>
        <div>
            <div>
                <span>Album</span>
                <span>{album}</span>
            </div>
            <div>
                <span>Artist</span>
                <span>{artist}</span>
            </div>
            <div>
                <span>Genre</span>
                <span>{genre}</span>
            </div>
            <div>
                <span>Release Date</span>
                <span>{releaseDate}</span>
            </div>
        </div>
    </div> );
}
 
export default SongInfo;