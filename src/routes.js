import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Login from './pages/login'
import RegisterUser from './pages/register/user'
import Session from './pages/session'
import RegisterVideo from './pages/register/video'
import RegisterSeason from './pages/register/season'
import Streamer from './pages/streamer'

export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>
      <Route component={Login} exact path='/'/>
      <Route component={RegisterUser} path='/register/user'/>
      <Route component={Session} path='/session'/>
      <Route component={RegisterVideo} path='/register/video'/>
      <Route component={RegisterSeason} path='/register/season'/>
      <Route component={Streamer} path='/streamer/:title/:youtubeId'/>
    </Switch>
    </BrowserRouter>
  )
}