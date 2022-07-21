import home, {homeEvents} from "./views/home.js";
import aboutHTML, {aboutEvents} from "./views/about.js";
import error404 from "./views/error404.js";
import loading from "./views/loading.js";
import login from "./views/login.js";
import LoginEvent from "./auth.js";
import register from "./views/register.js"
import {registerEvent} from "./views/register.js";
import userIndex, {userEvents} from "./views/user.js";
import logout, {logoutEvents} from "./views/logout.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: home,
            state: {},
            uri: '/',
            title: 'home',
            viewEvent: homeEvents
        },
        '/logout': {
            returnView: logout,
            state: {},
            uri: '/',
            title: 'logout',
            viewEvent: logoutEvents
        },
        '/login': {
            returnView: login,
            state: {},
            uri: '/login',
            title: "login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: register,
            state: {},
            uri: '/register',
            title: 'register',
            viewEvent: registerEvent
        },
        '/users': {
            returnView: userIndex,
            state: {},
            uri: "/users",
            title: 'User Info',
            viewEvent: userEvents
        },
        '/about': {
            returnView: aboutHTML,
            state: {},
            uri: '/about',
            title: 'aboutHTML',
            viewEvent: aboutEvents
        },
        '/error': {
            returnView: error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: loading,
            state: {},
            uri: location.pathname,
            title: 'loading...',
        }
    };

    // if we see a URI with index.html then interpret that as a route for /
    if(URI.indexOf("index.html") > -1) {
        URI = "/";
    }

    return routes[URI];
}