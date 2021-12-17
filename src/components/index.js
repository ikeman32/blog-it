//Import your custom components here

import Login from './login/login';
import Header from './header/Header';
import { sections, title } from './header/HeaderProps';
import SignUp from './signup/signup';
import StickyFooter from './footer/stickefooter';


//Then export them here
export {
    Login,
    Header,
    SignUp,
    StickyFooter,
    sections,
    title
};

/*
These components are then imported into the Routes.js file which will handle all the app routing

*/
