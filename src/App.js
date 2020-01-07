import React from 'react'
import './App.css'

import NewComment from './NewComment'
import Comments from './Comments'

/*firebase 
  .auth()
  .createUserWithEmailAndPassword('wagnerreis@gmail.com', 'abc123')
  .then( user => {
    //user.displayName= 'Wagner Reis'
    //firebase.auth().updateCurrentUser(user)
  })*/

  // firebase.auth().onAuthStateChanged(user => {
  //   if(user) {
  //     console.log(user.displayName)
  //     user.updateProfile({ displayName: 'Jorge Silva' })
  //   }
  // })

function App() {
  return (
    <div>
      <NewComment />
      <Comments />
    </div>
  )
}

export default App
