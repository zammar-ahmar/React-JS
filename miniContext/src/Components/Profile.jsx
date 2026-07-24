import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <h3>Please login to view your profile</h3>;
    }

    return (
        <div>
            Welcome {user.username}
        </div>
    );
}

export default Profile;