import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';


const Album = () => {
    const {albumId} = useParams();
    const filteredImg = useSelector(s => s.albums.albumsData.filter((el) => el.albumId === +albumId));
    return (
        <div>
           <div> album {albumId}</div>
            {filteredImg.map((el) => (<img className='album_img' src={`${el.url}`}
                alt="albums"/>))}
        </div>
    );
};
export default Album;