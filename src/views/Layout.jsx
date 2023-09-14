import React from "react";
import { Link } from "react-router-dom";
import content from "./Content";
import { ReactComponent as Logo } from "../logo-optimized.svg";



const Layout = () => {

    return (
        <>
            <nav className="flex justify-center">
                <div className="flex flex-wrap w-full py-3 px-3 md:px-0 max-w-6xl">

                    <a href="/">
                        <Logo width={50} height={50} />
                    </a>

                    <ul className="ms-auto flex w-full md:w-fit mt-3 md:mt-0">
                        <li className="px-3">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="px-3">
                            <Link to="/?tentang">Tentang</Link>
                        </li>
                        <li className="px-3">
                            <Link to="/?faq">FAQ</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {content()}
        </>
    )
};

export default Layout;