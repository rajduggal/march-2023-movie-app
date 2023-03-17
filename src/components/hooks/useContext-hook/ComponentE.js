import React, { useContext, useEffect } from 'react'
import { UserContext, AllUserData } from '../../../App'

function ComponentE() {

  const userName = useContext(UserContext)//context cosumption simplify using hooks
  const userAllData = useContext(AllUserData)

  useEffect(() => {
    console.log('updated name...');
    userName.updateState();
  }, []);

  return(
    <>
      <h2>Below data display with useContext Hook via Comp E</h2>
      <h4>Data via normal string</h4>
      <div>User context value {userName.curentState}</div> <hr/>
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

export default ComponentE
