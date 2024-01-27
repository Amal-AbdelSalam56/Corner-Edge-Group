import call from "../../assets/images/call.svg";
import mail from "../../assets/images/mail.svg";
import Insta from "../../assets/images/Insta.png";
import Fb from "../../assets/images/Fb.png";
import Twiter from "../../assets/images/Twiter.png";
import Pintrest from "../../assets/images/Pintrest.png";
import Logo from "../../assets/images/ICON.png";
import box from "../../assets/images/box.png";
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;

        // Navigate based on the selected option
        switch (selectedValue) {
            case 'home':
                navigate('/home');
                break;
            case 'aboutus':
                navigate('/aboutus');
                break;
            case 'blog':
                navigate('/blog');
                break;
            case 'services':
                navigate('/services');
                break;
            case 'contact':
                navigate('/contact');
                break;
            default:
                break;
        }
    };

    return (

        <>
            <div className="all bg-[#1D2F71] text-white pl-[269px] pr-[100px] py-[100px]">


                {/* Subscribe show in mobile */}
                <div className="Subscribe lg:hidden w-3/8 text-center h-fit mb-5">
                    <div className="mb-2">
                        <h1 className="text-[30px] font-bold mb-2">Subscribe:</h1>
                        <p className="text-[14px] mb-2">Join Our Mailing List & get our news.</p>
                    </div>

                    <div className="Subscribe items-center mt-4">
                        <input type="text" id="email" placeholder="your email address" className=" text-xl w-full py-4 px-6 mb-5 border-2 border-[#607D94]
                         text-[#607D94] rounded-lg bg-[#1D2F71]" />
                        <button className=" bg-[#40DDB6] mb-10 py-4 px-6 rounded-lg w-full text-white text-xl border-none">Subscribe</button>
                    </div>
                    {/* Horizontal Line */}
                    <hr className="border-t  border-[#6C6D72] my-4" />
                </div>

                {/* First Line */}
                <div className="First flex items-center justify-between mb-4 pr-[340px] flex-wrap">
                    <img src={Logo} alt="Logo" className="h-20 " />
                    <div className="hide flex flex-wrap">
                        <div>
                            <img src={call} alt="Icon" className="mr-2" style={{
                                backgroundColor: "#FFFFFF33",
                                padding: "16px",
                                borderRadius: "30px"
                            }} />

                            <div className="w-2" />
                            <div className="flex flex-col items-start mr-8 text-lg 	">
                                <span className="font-medium">Call Us</span>
                                <span>+61 481 95 11 96</span>
                            </div>
                        </div>
                        <div>

                            <img src={mail} alt="Icon" className="mr-2" style={{
                                backgroundColor: "#FFFFFF33",
                                padding: "16px",
                                borderRadius: "30px"
                            }} />

                            <div className="w-4" />
                            <div className="flex flex-col items-start text-lg 	">
                                <span className="font-medium">Mail Us</span>
                                <span>Info@corneredge.com.au</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Horizontal Line */}
                <hr className="hide border-t border-[#6C6D72] my-4 mx-16 " />


                {/* Dropdown mobile Section */}

                <div className="dropdown mb-4 lg:hidden">
                    {/* Quick Links Dropdown */}
                    <div className="w-1/8">
                        <select
                            className="w-full bg-[#1D2F71] text-lg mb-3"
                            onChange={handleSelectChange}
                        >
                            <option value="">Quick Links:</option>
                            <option value="home">Home</option>
                            <option value="aboutus">About Us</option>
                            <option value="blog">Blog</option>
                            <option value="services">Services</option>
                            <option value="contact">Contact</option>
                        </select>
                    </div>
                    {/* Horizontal Line */}
                    <hr className="border-t  border-[#6C6D72] mb-4" />

                    {/* Our Services Dropdown */}
                    <div className="w-1/8">
                        <select className=" w-full bg-[#1D2F71]  text-lg mb-3">
                            <option>Services:</option>
                            <option>Medical Equipment</option>
                            <option>Tendering & Procurement</option>
                            <option>Acceptance and Handover</option>
                            <option>Biomedical Equipment</option>
                            <option>Management</option>
                            <option>More</option>
                        </select>
                    </div>

                    {/* Horizontal Line */}
                    <hr className="border-t  border-[#6C6D72] mb-4" />

                    {/* Other Links Dropdown */}
                    <div className="w-1/8">
                        <select className=" w-full bg-[#1D2F71]  text-lg mb-3">
                            <option>Cantact info:</option>
                            <option>+61 481 95 11 96</option>
                            <option>Inf@corneredge.com</option>
                        </select>
                    </div>
                    <hr className="border-t  border-[#6C6D72] mb-10" />
                </div>


                {/* Quick Links Section */}
                {/* <div className="hide flex justify-between mb-4 flex-wrap">
                    {/* Quick Links 
                    <div className="w-1/8">
                        <h3 className="text-2xl font-semibold mb-2 flex text-[#40DDB6]"> <img src={box}
                            style={{ height: "fit-content", marginTop: "9px", marginRight: "10px" }} /> Quick Links:</h3>
                        <ul>
                            <li className="text-lg mb-3">Home</li>
                            <li className="text-lg text-[#40DDB6] mb-3">About Us</li>
                            <li className="text-lg mb-3">Blog</li>
                            <li className="text-lg mb-3">Services</li>
                            <li className="text-lg mb-3">Contact</li>
                        </ul>
                    </div>

                    {/* Our Services 
                    <div className="w-2/8">
                        <h3 className="text-2xl font-semibold mb-2 flex text-[#40DDB6]"><img src={box}
                            style={{ height: "fit-content", marginTop: "9px", marginRight: "10px" }} /> Our Services:</h3>
                        <rl>
                            <li className="text-lg mb-3">Medical Equipment</li>
                            <li className="text-lg mb-3">Tendering & Procurement</li>
                            <li className="text-lg mb-3">Acceptance and Handover</li>
                            <li className="text-lg mb-3">Biomedical Equipment </li>
                            <li className="text-lg mb-3">management</li>
                            <li className="text-lg mb-3 underline cursor-pointer" onClick={() => navigate('/services')}>More</li>
                        </rl>
                    </div>

                    {/* Other Links 
                    <div className="w-1/8 mt-9">

                        <rl >
                            <li className="text-lg mb-3">Enterprise Architecture Analysis</li>
                            <li className="text-lg mb-3">Requirements Management</li>
                            <li className="text-lg mb-3">Mapping Value Streams and <br />
                                Customer Journeys</li>
                            <li className="text-lg mb-3">Business Process Improvement </li>
                            <li className="text-lg mb-3 underline cursor-pointer" onClick={() => navigate('/services')}>More</li>
                        </rl>
                    </div>

                    {/* Subscribe Section
                    <div className=" Subscribe w-3/8 bg-[#FFFFFF33] p-[42px] h-fit">
                        <div className="mb-2">
                            <h1 className="text-xl font-bold mb-2">Subscribe:</h1>
                            <p className="text-lg mb-2">Join Our Mailing List & get our news.</p>
                        </div>
                        <div className="Subscribe flex items-center mt-4 ">
                            <input type="text" id="email" placeholder="your email address" className="input text-xl py-6 px-8 border-none text-black" />
                            <button className="button bg-[#40DDB6] py-6 px-8  text-white text-xl border-none">Subscribe</button>
                        </div>
                    </div>
                </div> */}

                {/* Horizontal Line */}
                <hr className="hide border-t border-[#6C6D72] my-4 mx-16 " />

                {/* Follow Section */}
                <div className="text-center flex-wrap">
                    <p className="Follow float-left">Copyright © <span className="text-[#40DDB6]">Corner Edge Group</span> | 2024  </p>
                    <div className="Follow flex justify-center flex-wrap">
                        <p className="mr-4">Follow:</p>
                        {/* Social Media Icons */}
                        <div className="flex items-center justify-center">
                            <img src={Insta} alt="Social Media Icon 1" className="mr-4" />
                            <img src={Fb} alt="Social Media Icon 2" className="mr-4" />
                            <img src={Twiter} alt="Social Media Icon 2" className="mr-4" />
                            <img src={Pintrest} alt="Social Media Icon 2" className="mr-4" />
                        </div>
                    </div>
                </div>

            </div >
            <style>
                {`
                   @media (max-width: 1334px) {
                    .First{
                        padding-right: 0px; 
                     } 
                   }

                  @media (max-width: 985px) {
                     .all{
                         padding-left: 100px; 
                     } 

                    }

                  @media (max-width: 621px) {
                   .all{
                     padding-left: 30px; 
                     padding-right: 30px; 
                      padding-top: 30px; 

                     } 
                     .hide {
                        display:none!important;
                     }

                  .Subscribe{
                      width: 100%;
                   } 
                  .input {
                     width: 70%;
                   }
                  .button{
                      width: 30%;
                      font-size: 10px;
                      padding-left:10px;
                     } 
                 .Follow{
                      width: 100%;
                    }       
              }

         `}
            </style>
        </>

    );
};

export default Footer;
