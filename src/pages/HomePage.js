import React from "react";
import { useNavigate } from "react-router-dom";
import Typograpgy from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import { genUsers } from "../services/api/user-api";
export default function Home(props) {
    let navigate = useNavigate();
    let users = genUsers(15);

    return (
        <>
            <Grid id="header" container justifyContent="center">
                <Grid item>
                    <Typograpgy variant="h3">Welcome, Please login to view User base</Typograpgy>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate("/login", { state: users });
                    }}
                >
                    Login
                </Button>
            </Grid>
        </>
    );
}
