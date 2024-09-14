import React from "react";

const MelodyImageDisplayer = ({imageFileName}) => {
    return (
        <div className="melody-image-displayer">
            <img className="melody-disk-blur" width="400" height="400" src={`/images/${imageFileName}`} alt="" />
            <img className="melody-disk" width="300" height="300" src={`/images/${imageFileName}`} alt="" />
        </div>
    )
}

export default MelodyImageDisplayer;