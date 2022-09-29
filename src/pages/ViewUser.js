import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { deleteUser } from "../services/api/user-api";

export default function UserDetails(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const users = location.state[0];
    const selectedUser = location.state[1].data;

    const removeUser = (event) => {
        deleteUser(users, selectedUser.id).then((value) => {
            navigate("/users", { state: users });
        });
    };
    const goBack = (event) => {
        navigate("/users", { state: users });
    };
    const editUser = (event) => {
        navigate("/edit_user", { state: [users, "Edit", selectedUser] });
    };
    return (
        <>
            <Grid container justifyContent="center">
                <Card sx={{ maxWidth: 500, mt: "5%" }}>
                    <CardMedia component="img" alt="User Avatar" height="140" image={selectedUser.avatar} />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            First Name: {selectedUser.firstName} <br></br>
                            Last Name: {selectedUser.lastName} <br></br>
                            Email: {selectedUser.email} <br></br>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={goBack}>
                            Go Back
                        </Button>
                        <Button size="small" onClick={removeUser}>
                            Delete
                        </Button>
                        <Button size="small" onClick={editUser}>
                            Edit
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}
