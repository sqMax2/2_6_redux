import * as React  from "react";
import {useParams} from "react-router-dom";

const User = () => {
    const params = useParams();
    return (
        <h4>
            User ID: {params.id}
        </h4>
    );
}

export default User;