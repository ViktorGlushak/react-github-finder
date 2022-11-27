import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex
        justify-between
        items-center
        h-[50px]
        px-5
        shadow-md
        bg-gradient-to-r
        {/*from-purple-600 via-pink-600 to-blue-600*/}
        from-rose-700 via-fuchsia-700 to-indigo-700
        text-white">
            <h3 className="font-bold">Github Search</h3>
            <span>
                <Link to="/" className="mr-2">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </span>
        </nav>
    );
};

export default Navigation;
