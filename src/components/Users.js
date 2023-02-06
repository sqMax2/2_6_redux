import * as React  from "react";
import {Outlet} from "react-router";
import {Link, useLocation} from "react-router-dom";

const Users = (props) => {
    const location = useLocation();
    const search = location.search;
    const query = new URLSearchParams(search);

    return (
        <>
            <h3>
                Users {props.mod} {query.get('sorting') ? `with sorting: ${query.get('sorting')}` : ''}
            </h3>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        <Link to={user.id}>
                            {user.fullName}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>

    );
}

export default Users;