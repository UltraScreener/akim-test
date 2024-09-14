import React, { useEffect, useCallback, useState } from "react";

const PlayButton = () => {
    const [play, setPlay] = useState(false)

    const [data, setData] = useState({})

    const fetchRequest = useCallback(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        setData(await response.json())
    }, [])



    const onClick = (e) => {
        e.stopPropagation()

        console.log(play)
        setPlay(!play)

        fetchRequest()
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