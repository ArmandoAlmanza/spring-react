import React from "react";

const Card = ({ name, age, email }) => {
    return (
        <article className="flex flex-col bg-slate-200 justify-center p-4 rounded-md">
            <h2 className="text-black text-xl font-bold">
                Name: <span className="text-purple-500">{name}</span>
            </h2>
            <p className="text-black">
                Age: <span className="text-purple-500">{age}</span>
            </p>
            <p className="text-black">
                Email: <span className="text-purple-500">{email}</span>
            </p>
        </article>
    );
};

export default Card;
