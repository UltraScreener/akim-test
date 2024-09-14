import React from "react";

const MelodyTitle = ({melodyAuthor, melodyName}) => {
    return (
        <div className="melody-title">
            <span className="melody-name"> {melodyName} </span>
            <span className="melody-author"> {melodyAuthor} </span>
        </div>
    )
}

export default MelodyTitle;