import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormControl, Button, TextField, Box, Typography } from "@mui/material";
import doLogin from "../services/login";

export default function LoginPage(props) {
    let navigate = useNavigate();
    let location = useLocation();
    const [inputs, setInputs] = useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        doLogin(location.state, inputs.email, inputs.password).then((value) => {
            try {
                console.log(JSON.parse(value));
                const authStatus = JSON.parse(value).data.status;
                if (authStatus) {
                    alert("Succesfully Logged In");
                }
            } catch (error) {
                alert("Admin Succesfully Logged in");
            }

            navigate("/users", { state: location.state });
        });
    };

    return (
        <>
            <Typography variant="h3" style={{ textAlign: "center" }}>
                Login
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
                <FormControl>
                    <form>
                        <TextField autoComplete="nope" name="email" label="Email" variant="outlined" type="email" onChange={handleChange} />
                        <br></br>
                        <TextField sx={{ mt: 1 }} label="password" name="password" variant="outlined" type="password" onChange={handleChange} />
                        <br></br>
                        <Button sx={{ mt: 1 }} variant="contained" onClick={handleSubmit}>
                            Login
                        </Button>
                    </form>
                </FormControl>
            </Box>
        </>
    );
}
