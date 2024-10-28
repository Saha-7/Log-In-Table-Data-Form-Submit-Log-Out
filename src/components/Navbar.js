import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const role = localStorage.getItem("role");

  return (
    <nav className="bg-black text-white text-xl font-sans font-semibold h-16 p-4 mb-2 flex flex-row-reverse justify-center items-center shadow-lg shadow-gray-500">
      <ul className="flex space-x-4">
        
        <li>
          <Link to="/home" className="hover:cursor-pointer">
            Home
          </Link>
        </li>

        {role === "admin" && (
          <li>
            <Link to="/form" className="hover:cursor-pointer">
              Form
            </Link>
          </li>
        )}

      </ul>
    </nav>
  );
}

export default Navbar;

