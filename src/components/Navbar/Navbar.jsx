import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import DarkMode from "../DarkMode/DarkMode";


const Navbar = () => {
    const { user, createLogOut } = useContext(authContext);
    const handleLogOut = () => {
        createLogOut()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'LogOut successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navLinks = <>
        <NavLink className={({ isActive }) => isActive ? "btn bg-[#D2B48C] text-white font-bold" : "btn hover:bg-[#D2B48C] hover:text-white font-bold"} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "btn bg-[#D2B48C] text-white font-bold" : "btn hover:bg-[#D2B48C] hover:text-white font-bold"} to="/addSpot">Add Tourists Spot</NavLink>
        <NavLink className={({ isActive }) => isActive ? "btn bg-[#D2B48C] text-white font-bold" : "btn hover:bg-[#D2B48C] hover:text-white font-bold"} to="/allSpot">All Tourists Spot</NavLink>
        <NavLink className={({ isActive }) => isActive ? "btn bg-[#D2B48C] text-white font-bold" : "btn hover:bg-[#D2B48C] hover:text-white font-bold"} to="/myList">My Lists</NavLink>
        <DarkMode></DarkMode>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu z-30 menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn hover:bg-[#D2B48C] hover:text-white font-extrabold text-xl">Globify</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <button onClick={handleLogOut} className="btn hover:bg-[#D2B48C] hover:text-white w-16 p-0">Log out</button>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="user photo" src={user.photoURL} title={user.displayName} />
                                    </div>
                                </div>
                            </>
                            :
                            <Link to="/login" className="btn hover:bg-[#D2B48C] hover:text-white">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;