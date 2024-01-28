import React, { useState } from 'react';
import drop from "../../assets/images/drop.png";
import Logo from "../../assets/images/ICON.png";
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

            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                <img src={Logo} alt="Logo" className="h-20 " />
            </div>


            <div className="relative">
                <img
                    src={isDropdownOpen ? close : drop}
                    className="text-white cursor-pointer"
                    onClick={toggleDropdown}
                />

                {/* Dropdown content */}
                {isDropdownOpen && (
                    <div className="Dropdown absolute mt-2 space-y-2"
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
                                marginBottom: "28px"
                            }}>
                            <a href='/'>Home</a>
                        </div>
                        <div className="Dropdownitem bg-blue-100 p-2 rounded cursor-pointer"
                            style={{
                                background: '#EAEBFF', height: "60px", color: "#1D2F71",
                                fontSize: "24px",
                                fontWeight: "700",
                                padding: "4px", paddingTop: "8px", marginBottom: "28px"
                            }}>
                            <a href='/services' >Services</a>
                        </div>
                        <div className="Dropdownitem bg-blue-200 p-2 rounded cursor-pointer"
                            style={{
                                background: '#EAF7FF', height: "60px", color: "#1D2F71",
                                fontSize: "24px",
                                fontWeight: "700",
                                padding: "4px", paddingTop: "8px", marginBottom: "28px"
                            }}>
                            <a href='/aboutus'>About Us</a>
                        </div>
                        <div className="Dropdownitem bg-purple-100 p-2 rounded cursor-pointer" style={{
                            background: '#FBF0FF', height: "60px", color: "#1D2F71",
                            fontSize: "24px",
                            fontWeight: "700",
                            padding: "4px", paddingTop: "8px",
                            marginBottom: "28px"
                        }}>
                            <a href='/contact'>Contact Us</a>
                        </div>
                        <div className="Dropdownitem bg-pink-100 p-2 rounded cursor-pointer" style={{
                            background: '#FFE0EC', height: "60px", color: "#1D2F71",
                            fontSize: "24px",
                            fontWeight: "700",
                            padding: "4px", paddingTop: "8px", marginBottom: "28px"
                        }}>
                            <a href='/blog'>Blog</a>
                        </div>
                        <div className="Dropdownitem bg-yellow-100 p-2 rounded cursor-pointer" style={{
                            background: '#FFEFDB', height: "60px", color: "#1D2F71",
                            fontSize: "24px",
                            fontWeight: "700",
                            padding: "4px", paddingTop: "8px", marginBottom: "28px"
                        }}>
                            <a href='/'>Login</a>
                        </div>
                    </div>
                )}
            </div>


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
        `}
            </style>








        </nav>
    );
};

export default Navbar;
