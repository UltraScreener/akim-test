import React, { useState } from "react";

const PlayButton = () => {
    const [play, setPlay] = useState(false)

    const onClick = (e) => {
        e.stopPropagation()

        console.log(play)
        setPlay(!play)
    }
    return (
        <button type="button" onClick={onClick}>
            Image
        </button>
    )
}

export default PlayButton;