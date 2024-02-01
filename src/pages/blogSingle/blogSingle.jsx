import Photo0 from "../../assets/images/Photo0.png";
import Photo1 from "../../assets/images/Image.png";
import Photo2 from "../../assets/images/Photo (4).png";
import user from "../../assets/images/user.png";
import ticket from "../../assets/images/ticket.png";
import { useNavigate } from 'react-router-dom';
import CardGroup from "../blog/cardGroup";

const BlogSingle = () => {

    const navigate = useNavigate();
    return (
        <>

            <div className="inside flex flex-col items-center mr-8 mb-8">

                {/* Button Group inside img */}

                <div className="relative">
                    {/* Image */}
                    <img
                        src={Photo0}
                        alt="Image 1"
                        className="group w-[1220px] h-auto mb-0"
                    />

                    {/* Button Group */}
                    <div className="absolute bottom-0 left-0 w-full ">
                        <div className="Buttongroup flex w-[592px] h-[65px]">
                            <button className="text-white bg-[#30407B] py-2 px-4 w-1/3">
                                April 13, 2021
                            </button>
                            <button className="flex items-center justify-center text-[#208068] bg-[#40DDB6] py-2 px-4 w-1/3">
                                <img
                                    src={user}
                                    alt="User"
                                    className="mr-2"
                                />
                                Miranda Doe
                            </button>
                            <button className="flex items-center justify-center text-[#208068] bg-[#40DDB6] py-2 px-4 w-1/3">
                                <img
                                    src={ticket}
                                    alt="Ticket"
                                    className="mr-2"
                                />
                                Business
                            </button>
                        </div>
                    </div>
                </div>


                <div className="group w-[1220px] mt-6">
                    <p className="text-[28px] font-bold mb-4"> Biomedical Equipment management :</p>
                    <rl className="text-[16px] text-[#797979] mb-2">
                        <li className=" mb-2">
                            Analyze the hospital’s asset list and perform an on-site audit of both clinical and non-clinical equipment
                        </li>
                        <li className=" mb-2">Create a maintenance program for all medical equipment, including preventative
                            maintenance, routine inspections, and repair</li>
                        <li className=" mb-2"> Provide the whole life cost for medical equipment.</li>
                        <li className=" mb-2"> Advice on Maintain accurate and up-to-date documentation of all medical
                            equipment, including inventory, maintenance records, testing results, and safety procedures.</li>
                        <li className=" mb-2">Assess the present suppliers’ service contracts to determine any
                            potential opportunities for optimizing or changing the contract term</li>
                        <li className=" mb-2">Provide safety procedures and protocols for the safe operation and handling
                            of medical equipment</li>

                    </rl>
                </div>


                <hr className="group w-[1220px] h-6 bg-[#29366E] mt-6" />
                <div className="group textgroup w-[1220px] h-[200px] bg-[#40DDB6] py-16 px-24 text-center text-[#37393F] text-[16px] font-medium overflow-hidden">
                    <p className="overflow-y-auto overflow-ellipsis">
                        Our expertise in Biomedical Engineering and ICT, alongside our consultancy and project management services, offers
                        a complete solution for healthcare projects. Understanding the industry’s unique demands, we tailor solutions for
                        new designs or renovations, meeting precise client needs.
                    </p>
                </div>




                <div className="group title py-[109px] w-[1220px] ">
                    {/* News Section */}
                    <div className="News flex justify-between flex-wrap">
                        {/* Left Part */}
                        <div className="pr-4">
                            <h1 className=" text-[34px] text-[#2F3E78] font-semibold mb-4">Related News</h1>
                        </div>

                        {/* Right Part */}
                        <div className="Rightbtn">
                            <button onClick={() => { navigate('/projects'); window.scrollTo(0, 0); }}
                                className="bg-[#2F3E78] text-[16px] font-semibold py-4 px-12 text-white">More News</button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center m-auto justify-center flex-wrap">
                    <CardGroup bigImg={Photo1} header="A Business Consulting That Can Produce"
                        contant="Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking." />
                    {/* Second image and buttons */}
                    <CardGroup bigImg={Photo2} header="Popular Digital Business analysis That in 2024"
                        contant="Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking." />
                </div>

            </div>




            <style>
                {`
           
                
                   @media (max-width: 1190px) {
                    .group  {
                        width: 100%!important;
                        margin: auto!important;
                      
                       }
                    .inside {
                        margin-right: 0!important;
                        padding: 1rem!important;
                    }   
                   
                   }
                   @media (max-width: 623px) {
                     .Buttongroup  {
                        width: 100%!important;
                       }
                      .News  {
                        justify-content: left;
                      }
                      .Rightbtn{
                        display:none!important;
                      }
                      .title {
                        padding-top: 44px!important;
                        padding-bottom: 0px!important;
                      }

                     }
                   @media (max-width: 901px) {
                    .textgroup  {
                        padding: 1rem!important;
                       }
                   }
                   

         `}
            </style>





        </>
    );
};

export default BlogSingle;