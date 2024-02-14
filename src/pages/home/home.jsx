import img2 from "../../assets/images/img2.png";
import Vector from "../../assets/images/Vector.svg";
import Background from "../../components/background/background";
import Cards from "../../components/cards/cards";
import About from "../../components/about/about";
import ProjectComponent from "../../components/ProjectComponent/ProjectComponent";
import { useNavigate } from 'react-router-dom';
import CardsComp from "../../components/cards/cardsComp";


const Home = () => {
    const navigate = useNavigate();

    return (
        <>

            <Background />


            <div className="Welcome flex bg-white text-[#37393F] p-8 flex-wrap">
                {/* Left Half */}
                <div className="Left w-1/2 pr-4 py-36 px-14">
                    <h1 className=" text-[28px] font-bold mb-4">Welcome to Corner Edge Group</h1>
                    <p className="mb-4 text-[#7D7D7D] text-[16px]">
                        Corner Edge delivers integrated engineering and business advisory services across our two main divisions.
                    </p>
                    <p className="mb-4 text-[#7D7D7D] text-[16px] ">
                        Our expertise in Biomedical Engineering and ICT, alongside our consultancy and project management services, offers a complete solution for different types of projects. Understanding the industry's unique demands, we tailor solutions meeting precise client needs.
                    </p>
                    <p className="mb-4 flex text-[#37393F] text-[18px]">
                        <img src={Vector} alt="Strategic Healthcare Equipment Planning" className="mb-2 mr-2" />
                        Biomedical Engineering and Strategic Healthcare Equipment Planning.
                    </p>
                    <p className=" flex text-[#37393F] text-[18px]">
                        <img src={Vector} alt="ICT Business analysis and architecture" className="mb-2 mr-2" />
                        ICT (Information & Communication Technologies) focusing on Business Analysis and Business Architecture.
                    </p>
                    <button className="btnmore bg-[#29366E] text-white px-5 py-4 mt-8"
                        onClick={() => { navigate('/aboutus'); window.scrollTo(0, 0); }} >
                        More About Us
                    </button>
                </div>

                {/* Right Half */}
                <div className="Right w-1/2 pr-40 p-20 bg-[#F4F4F4]">
                    <img src={img2} alt="Team Image" className="w-full h-auto mb-4" />
                    <h1 className="text-[28px] font-bold mb-4">With over 30 years of combined experience:</h1>
                    <p className="mb-4 text-[#7D7D7D] text-[16px]">
                        •	Our Professional Affiliations ensures we up to date with Australian professional standards and innovations.

                    </p><p className="mb-4 text-[#7D7D7D] text-[16px]">
                        •	Our global experience allows us to deliver world class solution in diverse environments.

                    </p><p className="mb-4 text-[#7D7D7D] text-[16px]">
                        •	Our International Professional Certifications ensure our team members are in line with global professional standards.

                    </p>
                    <p className="">
                        <a href="/contact" className=" text-[#37393F] text-[18px] font-semibold border-b border-[#37393F] pb-2">Get in Touch</a>
                    </p>
                </div>
            </div>

            <CardsComp />

            <About />

            <div className="Section p-[240px] pt-[169px]">
                {/* Our Projects Section */}
                <div className="addrees flex justify-between flex-wrap">
                    {/* Left Part */}
                    <div className="pr-4">
                        <h1 className="text-[34px] font-semibold mb-4 ml-4">Our Projects:</h1>
                    </div>

                    {/* Right Part */}
                    <div className="btnPart">
                        <button onClick={() => { navigate('/projects'); window.scrollTo(0, 0); }}
                            className="bg-[#40DDB6] text-[16px] font-semibold py-4 px-12 text-white">More Work</button>
                    </div>
                </div>

                <ProjectComponent />

            </div >









            <style>
                {`
                    

          @media (max-width: 895px) {
           .Left  {
            width: 100%!important;
            
           }
           .Right  {
            width: 100%!important;
            
           }
           .Section{
            padding-right: 69px!important;
            padding-left: 69px!important;
           }
          }
       
          @media (max-width: 587px) {
            .Section{
                padding-top: 69px!important;
                padding-bottom: 69px!important;
                padding-right: 6px!important;
                padding-left: 6px!important;
            }
            .btnmore{
                width: 100%!important;
            }
           }

           
           @media (max-width: 454px) {
            .addrees{
                justify-content: left;

            }
           .btnPart {
            display:none!important;
           }
           }


          @media (max-width: 632px) {
            .Left {
             
          padding-top: 3rem!important;
          padding-bottom: 3rem!important;
             
            }
           }
           @media (max-width: 510px) {
            .Welcome {
                padding-left: 0rem!important;
                padding-right: 0rem!important;
            }
            .Left {
                padding-left: 1.5rem!important;
                padding-right: 1.5rem!important;
            }
            .Right {
                padding-left: 1.5rem!important;
                padding-right: 1.5rem!important;
            }
           }

        `}
            </style>





        </>
    );
};

export default Home;
