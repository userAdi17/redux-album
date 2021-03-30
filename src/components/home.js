import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

const Home = () => {
    const albumsArray = useSelector(state => state.albums.albumsData.map((obj)=> obj.albumId))
        .filter((albumId,index,arrAlbum)=>arrAlbum.indexOf(albumId)===index);
    return (
        <div className='row'>
            <h1>Доступные альбомы</h1>
            {albumsArray.map((albums) => (
                <div className='albums' key={albums.id}>
                    <Link to={`/home/album/${albums}`} className='album-link'> Альбом {albums}</Link>
                </div>
            ))
            }
        </div>
    );
};
export default Home;
