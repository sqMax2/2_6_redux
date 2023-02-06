import * as React  from "react";
import {Outlet} from "react-router";

const OuterSpace = () => {
    return (
        <>
            <h2>
                OuterSpace
            </h2>
            <Outlet />
        </>

    );
}

export default OuterSpace;