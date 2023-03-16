import React, { useState, useEffect } from 'react'
import axios from 'axios' //npm i axios

function DataFetching() {
	const [posts, setPosts] = useState([])//1

	useEffect(() => {//1
		axios
			.get('https://jsonplaceholder.typicode.com/posts') //get request return promise.
			.then(res => {
        console.log(res)
		setPosts(res.data);
			})
			.catch(err => {
				console.log(err)
			})
	},[])//if we will not add dependecy data will load infite time, if we dont hv dependecy so pass blank array

	return (
		<div>
			<hr/><h3>Data Fetching via third party with useEffect</h3>
		
			<ul> 
				{posts.map(post => (
         		 <li key={post.id}>
					<h4>{post.title}</h4>
					<p>{post.body}</p>
				</li>
				))}
		
			</ul>
		</div>
	)
}

export default DataFetching
