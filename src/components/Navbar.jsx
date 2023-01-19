import { Link } from "react-router-dom";

const Navbar = () => {
    const routes = [
        { title: "Home", path: "/" },
        { title: "Create", path: "/users/create" }
    ];

    return (
        <nav className="max-w-screen-lg mx-auto my-5 flex justify-evenly items-center border-2 border-white p-6 flex-row">
            {routes.map((route, i) => {
                return (
                    <Link
                        to={route.path}
                        className="hover:underline transition-all ease-in-out text-2xl font-semibold"
                        key={i}
                    >
                        {route.title}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
