import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { searchUser } from "../services/api/user-api";

export default function UsersList(props) {
    const [userProfile, setSelectedUserProfile] = useState("");
    let navigate = useNavigate();
    console.log(props);
    const viewUser = (event) => {
        event.preventDefault();
        const userID = event.target.id.split("#")[1];
        searchUser(props.users[0].data, userID).then((value) => {
            setSelectedUserProfile(value);
            navigate("/user_profile", { state: [props.users[1], value] });
        });
    };

    return (
        <>
            {props.users[0].data.map((user) => {
                return (
                    <div key={`div#${user.id}`} style={{ margin: "1%" }}>
                        <Typography key={user.id}>
                            {user.firstName} {user.lastName}
                        </Typography>
                        <Button key={`ViewUserButton#${user.id}`} id={`ViewUserButton#${user.id}`} variant="contained" onClick={viewUser}>
                            View user
                        </Button>
                    </div>
                );
            })}
        </>
    );
}
