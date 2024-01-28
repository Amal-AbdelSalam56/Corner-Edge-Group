import img2 from "../../assets/images/img2.png";
import Vector from "../../assets/images/Vector.svg";
import Background from "../../components/background/background";
import Cards from "../../components/cards/cards";
import About from "../../components/about/about";
import ProjectComponent from "../../components/ProjectComponent/ProjectComponent";
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    return (
        <>

            <Background />


            <div className="Welcome flex bg-white text-[#37393F] p-8 flex-wrap">
                {/* Left Half */}
                <div className="Left w-1/2 pr-4 py-36 px-14">
                    <h1 className=" text-3xl font-bold mb-4">Welcome to Corner Edge Group</h1>
                    <p className="mb-4 text-[#7D7D7D] text-lg">
                        Corner Edge delivers integrated business and engineering consulting services for safe,
                        sustainable, and resilient health care facilities.
                    </p>
                    <p className="mb-4 text-[#7D7D7D] text-lg ">
                        Our expertise in Biomedical Engineering and ICT, alongside our consultancy and project
                        management services, offers a complete solution for healthcare projects. Understanding the
                        industry’s unique demands, we tailor solutions for new designs or renovations, meeting precise
                        client needs.
                    </p>
                    <p className="mb-4 flex text-[#37393F] text-xl">
                        <img src={Vector} alt="Strategic Healthcare Equipment Planning" className="mb-2 mr-2" />
                        Strategic Healthcare Equipment Planning
                    </p>
                    <p className=" flex text-[#37393F] text-xl">
                        <img src={Vector} alt="ICT Business analysis and architecture" className="mb-2 mr-2" />
                        ICT Business analysis and architecture
                    </p>
                    <button className="btnmore bg-[#29366E] text-white px-5 py-4 mt-8"
                        onClick={() => navigate('/aboutus')}>
                        More About Us
                    </button>
                </div>

                {/* Right Half */}
                <div className="Right w-1/2 pr-40 p-20 bg-[#F4F4F4]">
                    <img src={img2} alt="Team Image" className="w-full h-auto mb-4" />
                    <h1 className="text-3xl font-bold mb-4">With over 30 years of combined experience:</h1>
                    <p className="mb-4 text-[#7D7D7D] text-lg">
                        Our Team seamlessly integrate operational and technical knowledge in healthcare facilities.
                        Understanding the connections between furniture, equipment planning, and procurement enables us to
                        enhance facility efficiency and safety holistically.
                    </p>
                    <p className="">
                        <a href="#" className=" text-[#37393F] text-xl font-semibold border-b border-[#37393F] pb-2">Get in Touch</a>
                    </p>
                </div>
            </div>

            <Cards />

            <About />

            <div className="Section p-[240px] pt-[169px]">
                {/* Our Projects Section */}
                <div className="addrees flex justify-between flex-wrap">
                    {/* Left Part */}
                    <div className="pr-4">
                        <h1 className="text-4xl font-semibold mb-4 ml-4">Our Projects:</h1>
                    </div>

                    {/* Right Part */}
                    <div className="btnPart">
                        <button onClick={() => navigate('/projects')} className="bg-[#40DDB6] text-lg font-semibold py-4 px-12 text-white">More Work</button>
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
