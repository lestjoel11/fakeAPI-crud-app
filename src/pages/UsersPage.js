import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UsersList from "../components/UsersList";
import paginateUsers from "../services/paginate-users";
import { Pagination, Typography, Button } from "@mui/material";

export default function UsersPage(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const users = location.state;
    const paginatedUsers = paginateUsers(location.state);

    const [currentPageUsers, setPageUsers] = useState(paginatedUsers[page - 1]);
    const handleChange = (event, value) => {
        setPage(value);
        setPageUsers(paginatedUsers[value - 1]);
    };
    const newUser = () => {
        navigate("/create_user", { state: [users, "Create", { firstName: "", lastName: "", email: "", avatar: "" }] });
    };

    return (
        <>
            <Typography>
                {`Total Users: ${currentPageUsers.total}, Per page: ${currentPageUsers.per_page}, Current Page: ${currentPageUsers.data.length}`}{" "}
                <Button variant="contained" sx={{ m: 1 }} onClick={newUser}>
                    Create User
                </Button>
            </Typography>
            <UsersList users={[currentPageUsers, users]} />
            <Pagination count={paginatedUsers.length} variant="outlined" page={page} onChange={handleChange} />
        </>
    );
}
