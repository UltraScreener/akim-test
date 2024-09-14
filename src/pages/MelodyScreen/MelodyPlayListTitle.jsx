import React from "react";

const MelodyPlayListTitle = ({playListName}) => {
    return (
        <div className='play-list-title'>
            <span className='play-list-title__inscription'> Из плейлиста: </span>
            <span className='play-list-title__name'> «{playListName}» </span>
        </div>
    )
}

export default MelodyPlayListTitle;