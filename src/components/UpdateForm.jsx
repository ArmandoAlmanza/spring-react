import { useState, useEffect } from "react";
import { getUser, updateUser } from "../api/axiosResponse";
import { useParams } from "react-router-dom";

const UpdateForm = () => {
    const [user, setUser] = useState({});
    const { userId } = useParams();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ ...user, age: Number(user.age) });
        try {
            updateUser(userId, user);
            alert("User Updated");
        } catch (error) {
            console.log("hubo un error" + error);
        }
    };

    useEffect(() => {
        getUser(userId).then((data) => {
            setUser(data.data);
        });
    }, []);

    return (
        <div className="block p-6 rounded-lg shadow-lg bg-zinc-50 max-w-xl mx-auto">
            <form>
                <div className="form-group mb-6">
                    <label
                        htmlFor="name"
                        className="form-label inline-block mb-2 text-gray-700"
                    >
                        Enter your name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="block w-full py-2 px-2 rounded-md border-2 
						text-gray-700 border-slate-500 focus:text-gray-700 focus:bg-white focus:border-purple-500 focus:outline-none transition-all ease-out"
                        placeholder="Enter your name..."
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group mb-6 grid grid-cols-2">
                    <div>
                        <label
                            htmlFor="age"
                            className="form-label inline-block mb-2 text-gray-700"
                        >
                            Enter your age
                        </label>
                        <input
                            type="number"
                            name="age"
                            className="block w-3/4 py-2 px-2 rounded-md border-2 
							text-gray-700 border-slate-500 focus:text-gray-700 focus:bg-white focus:border-purple-500 focus:outline-none transition-all ease-out"
                            placeholder="Enter your age..."
                            value={Number(user.age)}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="form-label inline-block mb-2 text-gray-700"
                        >
                            Enter your email
                        </label>
                        <input
                            type="text"
                            name="email"
                            className="block w-full py-2 px-2 rounded-md border-2 
							text-gray-700 border-slate-500 focus:text-gray-700 focus:bg-white focus:border-purple-500 focus:outline-none transition-all ease-out"
                            placeholder="Enter your email..."
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="px-6 py-2.5 bg-blue-600 text-white font-medium text-md    leading-tight uppercase rounded shadow-md hover:bg-blue-700 over:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition      duration-150 ease-in-out mx-auto block"
                    onClick={handleSubmit}
                >
                    Create new user
                </button>
            </form>
        </div>
    );
};

export default UpdateForm;
