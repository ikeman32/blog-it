import React from 'react';
import { Route } from 'react-router-dom';
import {Home, About, Login} from '../index';

/* 
Put all of your routes here and they will be imported to App.js
Import all of your components from the index.js file in the root of components folder
*/

const Routes = () =>{
    return(
        <>
        <Route exact path="/" component={Login} />
        <Route path='/About' component={About} />
        <Route path='/Home' component={Home} />
        {/* <Route path='/<pathname here>' component={<component name here>}/> */}
        </>
    )
}

export default Routes;
