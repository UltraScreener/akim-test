import React from "react";
import image from "../../assets/images/melody-image.png"

const MelodyImageDisplayer = ({imagePath}) => {
    return (
        <div className="melody-image-displayer">
            <img className="melody-disk-blur" width="400" height="400" src={image} alt="" />
            <img className="melody-disk" width="300" height="300" src={image} alt="" />
        </div>
    )
}

export default MelodyImageDisplayer;