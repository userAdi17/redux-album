import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './login';
import Home from './home'
import Album from './album';
import {Provider} from "react-redux";
import store from '../redux/index';

function Root() {
    return (
        <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={()=> <Login/>}/>
                        <Route exact path='/home' component={()=> <Home/>}/>
                        <Route exact path='/home/album/:albumId' component={()=> <Album/>}/>
                    </Switch>
                </BrowserRouter>
        </Provider>
    );
}
export default Root;


















