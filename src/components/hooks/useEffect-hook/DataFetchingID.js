import React, { useState, useEffect } from 'react'
import axios from 'axios' //npm i axios

function DataFetchingID() {
	
	const [post, setPost] = useState({})//2 - intial value is object instead of empty array
	const [id, setId] = useState(1)//2
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)//3

	
	useEffect(() => {//2 - https://jsonplaceholder.typicode.com/posts/1
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`) //get request return promise.
			.then(res => {
        console.log(res)//single post to array on post
        setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick])//if we can leave empty array so it will not change value based on input so neeed to pass dependecy like id

	const handleClick = () => {//3
		setIdFromButtonClick(id)
	}

	return (
		<div>
			<hr/><h3>Data Fetching with id via third party api</h3>
			<input type="text" value={id} onChange={e => setId(e.target.value)} /> 
			{/* <span>controlled element that means we need to set value n listen to the onchange event to assign the value back to the input element </span> */}
			<button type="button" onClick={handleClick}>Fetch Post</button> 
			<div>{post.title}</div>
		</div>
	)
}

export default DataFetchingID
