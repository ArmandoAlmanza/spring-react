import React from "react";
import Card from "./Card";
import Loader from "./Loader";
import { deleteUser, getUser } from "../api/axiosResponse";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import UpdateForm from "./UpdateForm";

const User = () => {
    const { userId } = useParams();

    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getUser(userId).then((data) => {
                setUser(data.data);
                setLoading(false);
            });
        }, 2000);
    }, []);
    return (
        <div className="max-w-2xl mx-auto my-5 flex flex-col justify-center items-center">
            {loading ? (
                <Loader />
            ) : (
                <Card
                    key={user.id}
                    name={user.name}
                    age={user.age}
                    email={user.email}
                />
            )}
            <div>
                <Link
                    className="py-2 px-4 mx-auto block bg-red-300 text-black hover:bg-purple-400 transition-all ease-in-out my-4 text-xl"
                    onClick={() => {
                        deleteUser(user.id);
                        alert("User deleted succesfully");
                    }}
                    to={"/"}
                >
                    Delete
                </Link>
                <button
                    className="py-2 px-4 mx-auto block bg-cyan-400 text-black hover:bg-green-400 transition-all ease-in-out my-4 text-xl"
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    Update
                </button>
            </div>
            {visible ? <UpdateForm /> : ""}
        </div>
    );
};

export default User;
