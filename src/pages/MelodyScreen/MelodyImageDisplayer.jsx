import React from "react";
import {Image} from './../../common/components/Image'
const MelodyImageDisplayer = ({imageFileName}) => {
    return (
        <div className="melody-image-displayer">
            <Image path={`/images/${imageFileName}`} imageOptions={{className: 'melody-disk-blur', width: 400, height: 400}}/>
            <Image path={`/images/${imageFileName}`} imageOptions={{className: 'melody-disk', width: 300, height: 300}}/>
            {/* <img className="melody-disk-blur" width="400" height="400" src={`/images/${imageFileName}`} alt="" />
            <img className="melody-disk" width="300" height="300" src={`/images/${imageFileName}`} alt="" /> */}
        </div>
    )
}

export default MelodyImageDisplayer;