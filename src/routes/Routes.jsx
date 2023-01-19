import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListOfUsers from "../components/ListOfUsers";
import Navbar from "../components/Navbar";
import User from "../components/User";
import UserForm from "../components/UserForm";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ListOfUsers />} />
                <Route path="/users/:userId" element={<User />} />
                <Route path="/users/create" element={<UserForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;
