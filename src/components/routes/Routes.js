import * as React from 'react';
import { Route } from 'react-router-dom';
import {Home, About, Login, SignUp, StickyFooter, Editor} from '../index';

/* 
Put all of your routes here and they will be imported to App.js
Import all of your components from the index.js file in the root of components folder
*/

const Routes = () =>{
    return(
        <>
        <Route exact path="/" component={Home} />
        <Route path='/About' component={About} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/Login' component={Login} />
        <Route path='/StickyFooter' component={StickyFooter} />
        <Route path='/Editor' component={Editor} />
        {/* <Route path='/<pathname here>' component={<component name here>}/> */}
        </>
    )
}

export default Routes;
