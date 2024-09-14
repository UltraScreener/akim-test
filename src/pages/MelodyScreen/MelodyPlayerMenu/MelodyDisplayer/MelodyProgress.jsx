import React from "react";

const MelodyProgress = ({currentTime, fullTime}) => {
    return (
        <div>
            <div className="melody-progress-line"><hr /></div>
            <div className="melody-times">
                <span className="melody-current-time"> {currentTime} </span>
                <span className="melody-full-time"> {fullTime} </span>
            </div>
        </div>
    )
}

export default MelodyProgress;