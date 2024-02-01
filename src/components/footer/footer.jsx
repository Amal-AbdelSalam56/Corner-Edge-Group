import call from "../../assets/images/call.svg";
import mail from "../../assets/images/mail.svg";
import linkedin from "../../assets/images/linkedin.png";
import Fb from "../../assets/images/Fb.png";
import Twiter from "../../assets/images/Twiter.png";
import Pintrest from "../../assets/images/Pintrest.png";
import Logo from "../../assets/images/ICON.png";
import box from "../../assets/images/box.png";
import { useNavigate } from 'react-router-dom';
import Banner1 from "../../assets/images/Banner1.png";
import img9 from "../../assets/images/img9.png";
import Banner2 from "../../assets/images/Banner2.png";
import Photo2 from "../../assets/images/Photo2.png";
import Banner3 from "../../assets/images/Banner3.png";
import Photo3 from "../../assets/images/Photo3.png";
import Banner4 from "../../assets/images/Banner4.png";
import Photo4 from "../../assets/images/Photo4.jpg";
import Banner5 from "../../assets/images/Banner5.png";
import Photo5 from "../../assets/images/Photo5.jpg";
import Banner6 from "../../assets/images/Banner6.png";
import Photo6 from "../../assets/images/Photo6.jpg";
import Banner7 from "../../assets/images/Banner7.png";
import Photo7 from "../../assets/images/Photo7.jpg";
import Banner8 from "../../assets/images/Banner8.png";
import Photo8 from "../../assets/images/Photo8.jpg";
import Banner9 from "../../assets/images/Banner9.png";
import Photo9 from "../../assets/images/Photo9.png";
import Banner10 from "../../assets/images/Banner10.png";
import Photo10 from "../../assets/images/Photo10.jpg";


const Footer = () => {
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;

        // Navigate based on the selected option
        switch (selectedValue) {
            case 'home':
                navigate('/');
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

        //// Force a page refresh
        // window.location.reload();
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    };

    const handleReadMoreClick = (param) => {

        let imgCover = '';
        let img = '';
        let content = '';
        let values = [];
        let titl = '';


        if (param === 'Medical') {
            imgCover = Banner1;
            img = img9;
            titl = 'Medical Equipment Planning';
            content = 'Medical equipment planning is essential for optimizing patient care, operational efficiency,and cost-effectiveness in healthcare facilities. Strategic alignment with healthcare objectives ensures resource optimization, regulatory compliance, and a patient-centric environment, exploring the advantages of robust planning in health evolving landscape.';
            values = [
                { name: "Assessing the healthcare facility’s needs and requirements of equipment." },
                { name: "Identifying the appropriate medical equipment based on the facility’s needs." },
                { name: "Coordinating with architects and other stakeholders to ensure the facility." },
                { name: "Review and develop equipment layout plan." },
                { name: "Develop technical specifications for major medical equipment." },
                { name: "Report on medical equipment service and utility requirement." },
                { name: "Specify the regulatory standards and compliance requirements applicable to the medical equipment." },
            ];
        } else if (param === 'Furniture') {
            imgCover = Banner2;
            img = Photo2;
            titl = 'Furniture, Fixtures , and Equipment';
            content = 'We Manage and facilitate User group meetings for requirements gathering';
            values = [
                { name: "Developing and managing a detailed equipment and FF&E master list. " },
                { name: "Create and develop detailed FF&E specifications and procurement plan." },
                { name: "Coordinating with architects and other stakeholders to ensure the facility." },
                { name: "Coordinating with architects and contractors to ensure proper installation and integration of the FF&E." },
                { name: "Analysis and assess FF&E risks." },
                { name: "Conduct an analysis of the FF&E and identify any gaps or inconsistencies between the existing FF&E and the desired outcomes or requirement." },

            ];
        } else if (param === 'Tendering') {
            imgCover = Banner3;
            img = Photo3;
            titl = 'Tendering & ProcurementFurniture, Fixtures , and Equipment';
            content = 'We Produce medical equipment and FF&E budget';
            values = [
                { name: "Allocate medical equipment and FF&E by tender packages." },
                { name: "Advise on a list of pre-qualified suppliers." },
                { name: "Prepare tender documentation." },
                { name: "Advise on evaluation criterion." },
                { name: "Conduct a technical and functional evaluation of offered solutions." },
                { name: "Development of Tender Specifications." },
            ];
        } else if (param === 'Acceptance') {
            imgCover = Banner4;
            img = Photo4;
            titl = 'Acceptance and Handover';
            content = 'We Provide acceptance inspection criteria. ';
            values = [
                { name: "Define a detailed list of markings and documentation required for acceptance." },
                { name: "Advise on test selection and acceptance testing." },
                { name: "Advice on the documentation process for recording testing and acceptance results." },
                { name: "Coordinate medical equipment and FF&E signoff." },
            ];
        } else if (param === 'Biomedical') {
            imgCover = Banner5;
            img = Photo5;
            titl = 'Biomedical Equipment management';
            content = 'We Analyze the hospital’s asset list and perform an on-site audit of both clinical and non-clinical equipment';
            values = [
                { name: "Create a maintenance program for all medical equipment, including preventative maintenance, routine inspections, and repairs." },
                { name: "Assess the present suppliers’ service contracts to determine any potential opportunities for optimizing or changing the contract terms." },
                { name: "Develop a calibration program for all medical equipment including the required calibration tools." },
                { name: "Provide safety procedures and protocols for the safe operation and handling of medical equipment." },
                { name: "Provide the whole life cost for medical equipment" },
                { name: "Advice on Maintain accurate and up-to-date documentation of all medical equipment, including inventory, maintenance records, testing results, and safety procedures." },
            ];
        } else if (param === 'Enterprise') {
            imgCover = Banner6;
            img = Photo6;
            titl = 'Enterprise Architecture Analysis';
            content = 'Enterprise Architecture Analysis (EAA) is a holistic view of an organization s key business processes and IT infrastructure. It provides a strategic context for the evolution of the IT system in response to the constantly changing needs of business environments.We offer a business-focused strategy for Enterprise Architecture, guaranteeing that your IT investments are guided by your strategic business goals, leading to optimal ROI.';
            values = [
                { name: "Offers a strategic roadmap for IT investment and digital transformation." },
                { name: "Enhances efficiency by harmonizing IT resources with business objectives." },
                { name: "Minimizes complexity and redundancies in IT infrastructure." },
                { name: "Supports informed decision-making by delivering a comprehensive perspective of the organization." },

            ];
        } else if (param === 'Digital') {
            imgCover = Banner10;
            img = Photo10;
            titl = 'Digital Transformation Strategies';
            content = 'Strategies for digital transformation encompass the incorporation of digital technology across all aspects of a business, fundamentally altering its operations and value delivery to customers. It extends beyond mere IT infrastructure updates, representing a cultural shift that demands organizations to consistently challenge the existing norms and engage in experimentation.Our comprehensive suite of services is crafted to revolutionize your operations, enhance customer experiences, and drive sustainable growth in the rapidly evolving digital landscape.';
            values = [
                { name: "Increases competitiveness in the digital marketplace." },
                { name: "Enhances customer experience and engagement." },
                { name: "Increases operational efficiency through automation." },
                { name: "Enables new business models and revenue streams." },

            ];
        } else if (param === 'Requirement') {
            imgCover = Banner7;
            img = Photo7;
            titl = 'Requirements Management';
            content = 'A robust requirements management process forms the cornerstone of attaining business agility and software success within your organization.We provide a robust requirements management service that establishes a reliable and repeatable process, ensuring business agility, and software success. We promote consistency and traceability in requirements management, enabling the reuse of requirements and yielding substantial cost savings in product management and evolution.';
            values = [
                { name: "Comprehensive Governance and Information Management." },
                { name: "Consistency and Traceability Matrix." },
                { name: "Scalable Requirements for Futureproofing" },
                { name: "Cost Savings in Product Management and Evolution." },

            ];
        } else if (param === 'Cost') {
            imgCover = Banner8;
            img = Photo8;
            titl = 'Cost Savings in Product Management and Evolution.';
            content = 'Organizations aim to deliver products or services through value streams, which represent the processes involved. The customer journey encompasses the overall experience during the purchase.We analyze the value streams, including people, processes, and technologies, along with understanding the customer experience, empowers informed decisions for enhancing products and services. ';
            values = [
                { name: "Enhanced Product or Service Delivery" },
                { name: "Streamlined Processes through Value Streams" },
                { name: "Improved Overall Customer Experience" },
                { name: "Informed Decision-Making for Enhancements" },
            ];
        } else if (param === 'Business') {
            imgCover = Banner9;
            img = Photo9;
            titl = 'Business Process Improvement';
            content = 'Business Process Improvement (BPI) is a strategic planning approach focused on identifying areas in operations or employee skills that can be enhanced to increase operational efficiency, productivity, and overall performance.We analyze and evaluate current practices, redesigning processes, and implementing changes to achieve Process improvement.';
            values = [
                { name: "Streamlines business operations, reducing complexity and redundancy." },
                { name: "Enhances efficiency and productivity, which can lead to cost savings." },
                { name: "Improves customer service and satisfaction by reducing errors and delays." },
                { name: "Facilitates compliance with regulatory requirements." },
                { name: "Enables businesses to adapt to new market changes and customers' needs more quickly." },

            ];
        }

        // useEffect(() => {
        navigate('/servicesSingle', {
            state: { imgCover, img, titl, content, values },

        });
        // }, [imgCover, img, titl, content, values]);
        window.scrollTo(0, 0);


    };


    return (

        <>
            <div className="all bg-[#1D2F71] text-white pl-[269px] pr-[100px] py-[100px]">


                {/* Subscribe show in mobile */}
                <div className="Subscribe sm:hidden w-3/8 text-center h-fit mb-5">
                    <div className="mb-2">
                        <h1 className="text-[30px] font-bold mb-2">Subscribe:</h1>
                        <p className="text-[14px] mb-2">Join Our Mailing List & get our news.</p>
                    </div>

                    <div className="Subscribe items-center mt-4">
                        <input type="text" id="email" placeholder="your email address" className=" text-[18px] w-full py-4 px-6 mb-5 border-2 border-[#607D94]
                         text-[#607D94] rounded-lg bg-[#1D2F71]" />
                        <button className=" bg-[#40DDB6] mb-10 py-4 px-6 rounded-lg w-full text-white text-[18px] border-none">Subscribe</button>
                    </div>
                    {/* Horizontal Line */}
                    <hr className="border-t  border-[#6C6D72] my-4" />
                </div>

                {/* First Line */}
                <div className="First flex items-center justify-between mb-4 pr-[340px] flex-wrap">
                    <img src={Logo} alt="Logo" className="h-20 cursor-pointer" onClick={() => { navigate('/'); window.scrollTo(0, 0); }} />
                    <div className="hide flex flex-wrap">
                        <div className="flex">
                            <img src={call} alt="Icon" className="mr-2"
                                style={{
                                    backgroundColor: "#FFFFFF33",
                                    padding: "16px",
                                    borderRadius: "30px"
                                }} />

                            <div className="w-2" />
                            <div className="flex flex-col items-start mr-8 text-[16px] 	">
                                <span className="font-medium">Call Us</span>
                                <span>+61 481 95 11 96</span>
                            </div>
                        </div>
                        <div className=" flex ">
                            <img src={mail} alt="Icon" className="mr-2" style={{
                                backgroundColor: "#FFFFFF33",
                                padding: "16px",
                                borderRadius: "30px"
                            }} />

                            <div className="w-4" />
                            <div className="flex flex-col items-start text-[16px] 	">
                                <span className="font-medium">Mail Us</span>
                                <span>Info@corneredge.com.au</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Horizontal Line */}
                <hr className="hide border-t border-[#6C6D72] my-4 mx-16 " />


                {/* Dropdown mobile Section */}
                <div className="dropdown mb-4 sm:hidden">
                    {/* Quick Links Dropdown */}
                    <div className="w-1/8">
                        <select
                            className="w-full bg-[#1D2F71] text-[16px] mb-3"
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
                        <select className=" w-full bg-[#1D2F71]  text-[16px] mb-3">
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
                        <select className=" w-full bg-[#1D2F71]  text-[16px] mb-3">
                            <option>Cantact info:</option>
                            <option>+61 481 95 11 96</option>
                            <option>Inf@corneredge.com</option>
                        </select>
                    </div>
                    <hr className="border-t  border-[#6C6D72] mb-10" />
                </div>


                {/* Quick Links Section */}
                <div className="hide flex justify-between mb-4 flex-wrap">
                    {/* Quick Links  */}
                    <div className="w-1/8">
                        <h3 className="text-[22px] font-semibold mb-2 flex text-[#40DDB6]"> <img src={box}
                            style={{ height: "fit-content", marginTop: "9px", marginRight: "10px" }} /> Quick Links:</h3>
                        <ul>
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>Home</li>
                            <li className="text-[16px] text-[#40DDB6] mb-3 cursor-pointer" onClick={() => { navigate('/aboutus'); window.scrollTo(0, 0); }}>About Us</li>
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { navigate('/blog'); window.scrollTo(0, 0); }}>Blog</li>
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}>Services</li>
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}>Contact</li>
                        </ul>
                    </div>

                    {/* Our Services  */}
                    <div className="w-2/8">
                        <h3 className="text-[22px] font-semibold mb-2 flex text-[#40DDB6]"><img src={box}
                            style={{ height: "fit-content", marginTop: "9px", marginRight: "10px" }} /> Our Services:</h3>
                        <rl>
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { handleReadMoreClick('Medical'); window.scrollTo(0, 0); }}>Medical Equipment</li>
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { handleReadMoreClick('Tendering'); window.scrollTo(0, 0); }}>Tendering & Procurement</li>
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { handleReadMoreClick('Acceptance'); window.scrollTo(0, 0); }}>Acceptance and Handover</li>
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { handleReadMoreClick('Biomedical'); window.scrollTo(0, 0); }}>Biomedical Equipment </li>
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { handleReadMoreClick('Cost'); window.scrollTo(0, 0); }}>management</li>
                            <li className="text-[16px] mb-3 underline cursor-pointer" onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}>More</li>
                        </rl>
                    </div>

                    {/* Other Links  */}
                    <div className="w-1/8 mt-9">

                        <rl >
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { handleReadMoreClick('Enterprise'); window.scrollTo(0, 0); }}>Enterprise Architecture Analysis</li>
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { handleReadMoreClick('Requirement'); window.scrollTo(0, 0); }}>Requirements Management</li>
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { handleReadMoreClick('Digital'); window.scrollTo(0, 0); }}>Mapping Value Streams and <br /> Customer Journeys</li>
                            <li className="text-[16px] mb-3 cursor-pointer" onClick={() => { handleReadMoreClick('Business'); window.scrollTo(0, 0); }}>Business Process Improvement </li>
                            <li className="text-[16px] mb-3 underline cursor-pointer" onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}>More</li>
                        </rl>
                    </div>

                    {/* Subscribe Section */}
                    <div className="Subscribe w-3/8 bg-[#FFFFFF33] p-[42px] h-fit">
                        <div className="mb-2">
                            <h1 className="text-[18px] font-bold mb-2">Subscribe:</h1>
                            <p className="text-[16px] mb-2">Join Our Mailing List & get our news.</p>
                        </div>
                        <div className="Subscribe flex items-center mt-4 ">
                            <input type="text" id="email" placeholder="your email address" className="Subscribe input text-[18px] py-6 px-8 border-none text-black" />
                            <button className="button bg-[#40DDB6] py-6 px-8  text-white text-[18px] border-none">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Horizontal Line */}
                <hr className="hide border-t border-[#6C6D72] my-4 mx-16 " />

                {/* Follow Section */}
                <div className="text-center flex-wrap">
                    <p className="Follow float-left">Copyright © <span className="text-[#40DDB6]">Corner Edge Group</span> | 2024  </p>
                    <div className="Follow flex justify-center flex-wrap">
                        <p className="mr-4 mt-[4px]">Follow:</p>
                        {/* Social Media Icons */}
                        <div className="flex items-center justify-center text-center">
                            <img src={linkedin} alt="Social Media Icon 1" className="h-8 w-8 mr-4 cursor-pointer"
                                onClick={() => { navigate('/services'); window.scrollTo(0, 0); }} />
                            {/* <img src={Fb} alt="Social Media Icon 2" className="mr-4" />
                            <img src={Twiter} alt="Social Media Icon 2" className="mr-4" />
                            <img src={Pintrest} alt="Social Media Icon 2" className="mr-4" /> */}
                        </div>
                    </div>
                </div>

            </div >
            <style>
                {`

                 @media (max-width: 1534px) {
                    .Subscribe{
                        width: 100%;
                     } 
                     
                     
                     }
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
