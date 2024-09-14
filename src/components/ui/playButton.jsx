import React, { useEffect, useState } from "react";

const PlayButton = () => {
    const [play, setPlay] = useState(false)
    
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(async response => {
        setData(await response.json())
    })
    }, [])


    const onClick = (e) => {
        e.stopPropagation()

        console.log(play)
        setPlay(!play)
    }
    
    return (
        <>
        <div style={{color: '#fff'}}>responseTitle: {data.title}</div>
        <button type="button" onClick={onClick}>
            Image
        </button>
        </>
    )
}

export default PlayButton;