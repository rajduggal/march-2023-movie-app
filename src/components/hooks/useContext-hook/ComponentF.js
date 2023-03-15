import React from 'react'
import { UserContext,ChannelContext } from '../../../App'

function ComponentF() {
	return (
		<div>
			<UserContext.Consumer>
				{
					userVal => {
						return (
							<ChannelContext.Consumer>
								{
									channel => {
										return(
											<div>User context value {userVal}<br/>Channel context value {channel}</div>
										)
									}
								}
							</ChannelContext.Consumer>
						)
						// <div>User context value {userVal}</div>
					}
				}
			</UserContext.Consumer>
		</div>
	)
}

export default ComponentF
