import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api/axiosResponse";

const ListOfUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data.data);
        });
    }, []);
    return (
        <div className="grid grid-cols-3 gap-5">
            {users.map((user) => {
                return (
                    <Link key={user.id} to={`/users/${user.id}`}>
                        <Card
                            name={user.name}
                            age={user.age}
                            email={user.email}
                        />
                    </Link>
                );
            })}
        </div>
    );
};

export default ListOfUsers;
