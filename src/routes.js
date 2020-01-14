import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './Login/SignInUser'
import Header from './Header/Header'

function Routes(){
    return(
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/userInfo" component={UserInfo} />
            <Route exact path="/NewComment" component={NewComment} />
            <Route exact path="/Comments" component={Comments} />
            <Route exact path="/" component={SignInUser} />
            <Route exact path="/createUser" component={CreateUser} />
          </Switch>
        </BrowserRouter>
      ) 
}

export default Routes;