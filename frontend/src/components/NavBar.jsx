import { PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { SearchIcon } from 'lucide-react'

const NavBar = () => {
  return (
  <div className="navbar fixed top-0 z-10 h-16 flex justify-between bg-transparent shadow-lg">
        <div className="flex items-center">
            <Link to={"/"} className="btn text-white bg-transparent">
                    Home
            </Link>
        </div>
        <div className="flex items-center">
            <div className="flex m-1 items-center">
                <Link to={"/writings"} className="btn text-white bg-transparent">
                        Writings
                </Link>
            </div>
            <div className="flex m-1 items-center">
                <Link to={"/about"} className="btn text-white bg-transparent">
                        About Me
                </Link>
            </div>
        </div>
        <div className="flex items-center">
            <Link to={"/create"} className="btn text-white bg-transparent">
                <PlusIcon className="size-5"/>
                Create Writing
            </Link>
        </div>
    </div>
  )
}

export default NavBar
