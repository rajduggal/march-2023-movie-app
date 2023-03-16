import React from 'react'
import { UserContext, AllUserData } from '../../../App'

function ComponentF() {
	return (
		<div>
			<h2>Below data display via Context API via Comp F</h2>
			<UserContext.Consumer>
				{
					userName => {
						return (
							<AllUserData.Consumer>
								{
									userAllData => {
										return(
											<>
												<h4>Data via normal string</h4>
												<div>User context value {userName}</div> <hr/>
												<h4><u>Below data display via array</u></h4>
												<ul> 
													{userAllData.map(post => (
														<li key={post.id}>
															<h4>{post.title}</h4>
															<p>{post.body}</p>
														</li>
													))}
												</ul>
											</>
										)
									}
								}
							</AllUserData.Consumer>
						)
					}
				}
			</UserContext.Consumer>
		</div>
	)
}

export default ComponentF
