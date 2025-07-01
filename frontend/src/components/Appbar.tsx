import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Appbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/blogs"} className="font-semibold text-lg flex flex-col justify-center text-4xl font-serif bg-gradient-to-r from-amber-800 via-emerald-600 to-cyan-400 bg-clip-text text-transparent">
        Narrative
      </Link>
      <div className="flex items-center space-x-4">
        <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            NEW
          </button>
        </Link>

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            LOGOUT
          </button>
        )}

        <Avatar size={"big"} name="Narrative" />
      </div>
    </div>
  );
};
