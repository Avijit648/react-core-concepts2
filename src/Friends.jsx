import { useState } from 'react'
import './Friends.css'
import { useEffect } from 'react';
export default function Friends(){

    const [friends, setFriends] = useState ([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res = res.json())
        .then(data => console.log(data))
    }, [])

    return(
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
        </div>
    )
}

/*
1. state to hold data
2. use effect with dependency array
3. use fetch to lotad data
*/ 