import React, { useState } from 'react';
import drop from "../../assets/images/drop.png";
import Logo from "../../assets/images/newlogo.png";
import close from "../../assets/images/close.png";
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="nav flex justify-between items-center bg-white p-4 sticky inset-x-0 top-0 w-full z-10"
            style={{ paddingRight: '251px', paddingLeft: '251px' }}>

            <div className=" flex items-center cursor-pointer" onClick={() => navigate('/')}>
                <img src={Logo} alt="Logo" className="h-20 " />
                <div className="w-4" />
                <div className="hide flex flex-col items-center text-[14px]">
                    <span className="font-semibold">Corner Edge</span>
                    <span className="font-semibold">Group</span>
                    <span className="font-semibold text-[#40DDB6]">Engineering Advisors</span>

                </div>
            </div>


            <div className="relative">
                <img
                    src={isDropdownOpen ? close : drop}
                    className="text-white cursor-pointer"
                    // onClick={toggleDropdown}
                    onMouseEnter={toggleDropdown}
                // 
                />

                {/* Dropdown content */}
                {isDropdownOpen && (
                    <div className="Dropdown absolute mt-2 space-y-2"
                        onMouseLeave={toggleDropdown}
                        style={{
                            width: "261px",
                            color: "#1D2F71",
                            textAlign: "center",
                            right: "-119px",
                            padding: "45px",
                            backgroundColor: "#fff"
                        }}>

                        <div className="Dropdownitem bg-green-100 p-2 rounded cursor-pointer"
                            style={{
                                background: '#E2FFE9',
                                height: "60px", color: "#1D2F71",
                                fontSize: "24px",
                                fontWeight: "700",
                                padding: "4px",
                                paddingTop: "8px",
                                marginBottom: "20px",
                            }}>
                            <a href='/'>Home</a>
                        </div>
                        <div className="Dropdownitem bg-blue-100 p-2 rounded cursor-pointer"
                            style={{
                                background: '#EAEBFF', height: "60px", color: "#1D2F71",
                                fontSize: "24px",
                                fontWeight: "700",
                                padding: "4px", paddingTop: "8px", marginBottom: "20px",
                            }}>
                            <a href='/menu' >Services</a>
                        </div>
                        <div className="Dropdownitem bg-blue-200 p-2 rounded cursor-pointer"
                            style={{
                                background: '#EAF7FF', height: "60px", color: "#1D2F71",
                                fontSize: "24px",
                                fontWeight: "700",
                                padding: "4px", paddingTop: "8px", marginBottom: "20px",
                            }}>
                            <a href='/aboutus'>About Us</a>
                        </div>
                        <div className="Dropdownitem bg-purple-100 p-2 rounded cursor-pointer" style={{
                            background: '#FBF0FF', height: "60px", color: "#1D2F71",
                            fontSize: "24px",
                            fontWeight: "700",
                            padding: "4px", paddingTop: "8px",
                            marginBottom: "20px",
                        }}>
                            <a href='/contact'>Contact Us</a>
                        </div>
                        <div className="Dropdownitem bg-red-100 p-2 rounded cursor-pointer" style={{
                            background: '#FFE0EC', height: "60px", color: "#1D2F71",
                            fontSize: "24px",
                            fontWeight: "700",
                            padding: "4px", paddingTop: "8px", marginBottom: "20px",
                        }}>
                            <a href='/projects'>Projects</a>
                        </div>
                        <div className="Dropdownitem bg-green-100 p-2 rounded cursor-pointer" style={{
                            height: "60px", color: "#1D2F71",
                            fontSize: "24px",
                            fontWeight: "700",
                            padding: "4px", paddingTop: "8px", marginBottom: "20px",
                        }} >
                            <a href='/teamPage' >our Team</a>
                        </div>
                        {/* <div className="Dropdownitem bg-pink-100 p-2 rounded cursor-pointer" style={{
                            background: '#FFE0EC', height: "60px", color: "#1D2F71",
                            fontSize: "24px",
                            fontWeight: "700",
                            padding: "4px", paddingTop: "8px",marginBottom: "20px",
                        }}>
                            <a href='/blog'>Blog</a>
                        </div> */}
                        <div className="Dropdownitem bg-pink-100 p-2 rounded cursor-pointer" style={{
                            background: '#FFE0EC',
                            height: "60px",
                            color: "#1D2F71",
                            fontSize: "24px",
                            fontWeight: "700",
                            padding: "4px",
                            paddingTop: "8px",
                            marginBottom: "20px",
                            pointerEvents: "none", // Disable pointer events
                            opacity: "0.5" // Apply opacity to visually indicate disabled state
                        }}>
                            {/* Anchor tag */}
                            <a href='/blog' className="block w-full h-full text-center">
                                Blog
                            </a>
                        </div>
                        {/* <div className="Dropdownitem bg-yellow-100 p-2 rounded cursor-pointer" style={{
                            background: '#FFEFDB', height: "60px", color: "#1D2F71",
                            fontSize: "24px",
                            fontWeight: "700",
                            padding: "4px", paddingTop: "8px",marginBottom: "20px",
                        }} >
                            <a href='/' >Login</a>
                        </div> */}
                        <div
                            className="Dropdownitem bg-yellow-100 p-2 rounded cursor-pointer"
                            style={{
                                background: '#FFEFDB',
                                height: "60px",
                                color: "#1D2F71",
                                fontSize: "24px",
                                fontWeight: "700",
                                padding: "4px",
                                paddingTop: "8px",
                                marginBottom: "20px",
                                pointerEvents: "none", // Disable pointer events
                                opacity: "0.5" // Apply opacity to visually indicate disabled state
                            }}
                        >
                            {/* Anchor tag */}
                            <a href="/" className="block w-full h-full text-center">
                                Login
                            </a>
                        </div>





                    </div>
                )
                }
            </div >


            <style>
                {`
          @media (max-width: 1574px) {
           .nav {
            padding-right: 70px!important;
            padding-left: 70px!important;
           }
           .Dropdown {
            right:-70px!important;
           }
          }
          
          @media (max-width: 435px) {
            .hide {
                display: none;

            }
           
           }




        `}
            </style>








        </nav >
    );
};

export default Navbar;
