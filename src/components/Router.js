import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from "./Home/Home";
import {About} from './About/About';
import {PageNotFound} from './ViewPage/PageNotFound';
import {Header} from './ViewPage/Header';

export const Routes=()=>(
    <>
    <Header/>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route component={PageNotFound}/>
    </Switch>
    </>
);