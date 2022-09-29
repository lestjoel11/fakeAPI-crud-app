import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";
import UserDetails from "./pages/ViewUser";
import UserInfo from "./pages/UserData";
import ErrorPage from "./pages/ErrorPage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/login" element={<LoginPage />}></Route>
                    <Route exact path="/users" element={<UsersPage />}></Route>
                    <Route exact path="/user_profile" element={<UserDetails />}></Route>
                    <Route exact path="/edit_user" element={<UserInfo />}></Route>
                    <Route exact path="/create_user" element={<UserInfo />}></Route>
                    <Route exact path="*" element={<ErrorPage />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
