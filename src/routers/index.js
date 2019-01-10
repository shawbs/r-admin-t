import React from 'react'; 
import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from '@/pages/Home'
import Login from '@/pages/Login'

const Routes = () => (
    <HashRouter>
        <Switch>
          <Route path="/home"  component = {Home}/>
          <Route exact path="/login"  component = {Login}/>
        </Switch>
    </HashRouter>
)

export default Routes
