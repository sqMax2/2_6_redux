import * as React  from "react";
import {Link, Route} from "react-router-dom";
import {createRoutesFromElements, createBrowserRouter, RouterProvider} from "react-router-dom";

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import "../styles/App.css";
import Home from "./Home";
import ReduxApp from "./App-redux";
import OuterSpace from "./OuterSpace";
import Users from "./Users";
import {Routes} from "react-router";
import User from "./User";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={'/'}
                   element={<Home/>} />
            <Route path={'redux'}
                   element={<ReduxApp/>} />
            <Route path='os'
                   element={<OuterSpace/>} >

            </Route>
            <Route path={'users'}
                   element={<Users/>}/>
        </>
    )
);

const users = [
    { id: '1', fullName: 'Robin Wieruch' },
    { id: '2', fullName: 'Sarah Finnley' },
];

function App() {
    return (
        <>
            {/*<RouterProvider router={router} />*/}
            <div className={'App'}>
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/os'}>OuterSpace</Link>
                    <Link to={'/os/users'}>OuterSpace/Users</Link>
                    <Link to={'/users'}>Users</Link>
                    <Link to={'redux'}>Redux</Link>
                </nav>
                <SwaggerUI spec={'./swagger-config.yaml'}/>
                <Routes>


                    <Route path={'os'} element={<OuterSpace />} >
                        <Route path={'users'} element={<Users users={users} mod={'nested'}/>} >
                            <Route path={':id'} element={<User />} />
                        </Route>

                    </Route>
                    <Route path={'users'} element={<Users users={users} mod={'normal'}/>} >

                    </Route>
                    <Route path={'users/:id'} element={<User />} />
                    <Route path={'redux'} element={<ReduxApp />} />
                    <Route path={'/'} element={<Home />} />


                </Routes>

            </div>

        </>

    );
}

export default App;