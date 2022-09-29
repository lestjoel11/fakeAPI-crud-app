import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormControl, Button, TextField, Box, Typography } from "@mui/material";
import { updateUser, createUser } from "../services/api/user-api";

export default function UserInfo(props) {
    // const devLogin = {email:"admin@example.com",password:"admin"}
    let navigate = useNavigate();
    let location = useLocation();
    const users = location.state[0];
    const action = location.state[1];
    const userDetails = location.state[2];

    const [inputs, setInputs] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (action.toLowerCase() === "edit") {
            updateUser(users, userDetails.id, inputs).then((value) => {
                let [updatedUsers, updatedUser, responseMsg] = value;
                console.log(responseMsg);
                if (responseMsg.data.status === "success") alert(`Successfuly Edited`);
                else alert("Could not update user details, please try again");
                navigate("/user_profile", { state: [updatedUsers, { data: updatedUser }] });
            });
        } else if (action.toLowerCase() === "create") {
            createUser(users, inputs).then((value) => {
                let [updatedUsers, newUser, responseMsg] = value;
                console.log(responseMsg);
                if (responseMsg.data.status === "success") alert(`Successfuly Created`);
                else alert("Could not create user, please try again");
                navigate("/users", { state: updatedUsers });
            });
        }
    };

    return (
        <>
            <Typography variant="h3" style={{ textAlign: "center" }}>
                {action} user
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
                <FormControl>
                    <form>
                        <TextField autoComplete="nope" name="firstName" label="First Name" variant="outlined" onChange={handleChange} defaultValue={userDetails.firstName} />
                        <TextField autoComplete="nope" name="lastName" label="Last Name" variant="outlined" onChange={handleChange} defaultValue={userDetails.lastName} />
                        <br></br>
                        <br></br>
                        <TextField autoComplete="nope" name="email" label="Email" variant="outlined" type="email" onChange={handleChange} defaultValue={userDetails.email} />
                        <br></br>
                        <br></br>
                        <TextField sx={{ mt: 1 }} name="avatar" label="Avatar Link (if you have)" variant="outlined" onChange={handleChange} defaultValue={userDetails.avatar} />
                        <br></br>
                        <Button sx={{ mt: 1 }} variant="contained" onClick={handleSubmit}>
                            {action}
                        </Button>
                    </form>
                </FormControl>
            </Box>
        </>
    );
}
