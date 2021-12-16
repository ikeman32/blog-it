//Import your custom components here
import Home from './home/Home';
import About from './about/About'
import Login from './login/login';
import Header from './header/Header';
import { sections, title } from './header/HeaderProps';
import SignUp from './signup/signup';
import StickyFooter from './footer/stickefooter';
import Editor from './adminpages/Editor';


//Then export them here
export {
    Home,
    About,
    Login,
    Header,
    SignUp,
    StickyFooter,
    Editor,
    sections,
    title
};

/*
These components are then imported into the Routes.js file which will handle all the app routing

*/
