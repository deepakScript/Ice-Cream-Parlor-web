import React, { useRef } from "react";

function Nav() {
    const menu = useRef();

    const menuhandler = () => {
        menu.current.classList.toggle('show-menu')
    }
    return (
        <>
            <div className="h-[80px] flex justify-between items-center px-[12%] py-[0] relative">
                <div className="flex items-center justify-center ">
                    <span className="text-2xl text-red-600 font-medium cursor-pointer">ICE PARLOR</span>
                </div>
                <div ref={menu} className="md:static absolute top-[100%] left-[-100%] md:left-[0%] z-999 gap-5 w-full transition-all duration-700 bg-white md:bg-[#ffded1]">
                    <ul className="w-full flex flex-col md:flex-row gap-4 justify-center">
                        <li className="nav-wrapper"><a href="#" className="Nav-link">Home</a></li>
                        <li className="nav-wrapper"><a href="#" className="Nav-link">Category</a></li>
                        <li className="nav-wrapper"><a href="#" className="Nav-link">Popular</a></li>
                        <li className="nav-wrapper"><a href="#" className="Nav-link">Shop</a></li>
                        <li className="nav-wrapper"><a href="#" className="Nav-link">Testimonials</a></li>
                        <li className="nav-wrapper"><a href="#" className="Nav-link">Contact</a></li>
                    </ul>
                </div>
                <div className="flex gap-5 items-center justify-center">
                    <button className="btn nav-btn">Shop Now <i className="ri-arrow-right-line"></i> </button>
                    <i className="ri-menu-3-line btn bar"
                    onClick={menuhandler}
                    ></i>
                </div>
            </div>
        </>
    )
}

export default Nav;