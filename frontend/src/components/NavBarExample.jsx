import React from 'react'
import { Link } from 'react-router'

const NavBarExample = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm top-0 sticky z-50">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                    <li className="m-1">
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li className="m-1">
                        <Link to={"/writings"}>
                            Writings
                        </Link>
                    </li>
                    <li className="m-1">
                        <Link to={"/about"}>
                            About Me
                        </Link>
                    </li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">William Sun</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/writings"}>
                            Writings
                        </Link>
                    </li>
                    <li>
                        <Link to={"/about"}>
                            About Me
                        </Link>
                    </li>
                </ul>
            </div>
        <div className="navbar-end">
            <Link to={"/create"}>
                <div className="btn">
                    Login to Write
                </div>
            </Link>
        </div>
</div>
  )
}

export default NavBarExample
