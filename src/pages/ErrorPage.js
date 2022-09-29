import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export default function ErrorPage() {
    let navigate = useNavigate();
    const home = () => navigate("/");
    return (
        <>
            <Button variant="outlined" onClick={home}>
                Return Home
            </Button>
        </>
    );
}
