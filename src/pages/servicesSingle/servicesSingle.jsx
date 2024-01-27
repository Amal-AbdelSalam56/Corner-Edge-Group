
import Banner1 from "../../assets/images/Banner1.png";
import img9 from "../../assets/images/img9.png";
import Dropdown from "./components/dropdown";
import checkgreen from "../../assets/images/checkgreen.svg";
import { useEffect, useState } from "react";



const ServicesSingle = () => {
    const values = [
        { name: "Assessing the healthcare facility’s needs and requirements of equipment." },
        { name: "Identifying the appropriate medical equipment based on the facility’s needs." },
        { name: "Coordinating with architects and other stakeholders to ensure the facility." },
        { name: "Review and develop equipment layout plan." },
        { name: "Develop technical specifications for major medical equipment." },
        { name: "Report on medical equipment service and utility requirement." },
        { name: "Specify the regulatory standards and compliance requirements applicable to the medical equipment." },
    ];

    const [Values, setDisplayedValues] = useState([]);

    const [displayedIndex, setDisplayedIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedIndex((prevIndex) => prevIndex + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const displayedValues = values.slice(0, displayedIndex);



    return (
        <>

            <div className="relative">

                <img src={Banner1} alt="Your Image" className="w-full h-auto " />

                {/* Text on Image */}
                <div className="TextImg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold">
                    Medical Equipment Planning
                </div>
            </div>

            <div className="flex Business p-[9rem] flex-wrap">
                {/* Left half with image and content */}
                <div className="Left w-[60%]">
                    <img src={img9} alt="Medical Equipment Planning" className="w-full mb-[3rem]" />
                    <h1 className="text-2xl font-bold mt-4 mb-[3rem]">Medical Equipment Planning</h1>
                    <p className="text-gray-600 mt-2  ">
                        Medical equipment planning is essential for optimizing patient care, operational efficiency,
                        and cost-effectiveness in healthcare facilities. Strategic alignment with healthcare objectives
                        ensures resource optimization, regulatory compliance, and a patient-centric environment,
                        exploring the advantages of robust planning in health evolving landscape.
                    </p>
                </div>

                {/* Right half with dropdowns */}
                <div className="Right w-[40%]">
                    <div className="Rightleft mb-4 float-right">
                        <Dropdown
                            title="Strategic Healthcare Equipment Planning"
                            items={[
                                "Medical Equipment Planning",
                                "Furniture, Fittings, and Equipment",
                                "Tendering & Procurement",
                                "Acceptance and Handover",
                                "Biomedical Equipment Management",
                            ]}

                        />
                    </div>
                    <div className="Leftright float-right">
                        <Dropdown
                            title="ICT Business Analysis and Architecture"
                            items={[
                                "Enterprise Architecture Analysis",
                                "Requirements Management",
                                "Mapping Value Streams and Customer Journeys",
                                "Business Process Improvement",
                                "Digital Transformation Strategies",
                            ]}

                        />
                    </div>
                </div>
            </div>


            <div className="values pl-[9rem] pb-[9rem]">
                {/* Our values Section */}
                <div className="flex justify-between ">
                    <div className="pr-4">
                        <h1 className="text-4xl font-semibold mb-4 ">Our values:</h1>
                    </div>
                </div>

                {/* values List Section */}
                <div className="flex justify-between mt-8">

                    <div className="w-full pr-4">
                        <ul>
                            {displayedValues.map((value, index) => (
                                <li key={index} className="mb-4 flex items-center">
                                    <span>
                                        <img src={checkgreen} className="mr-8" />
                                    </span>
                                    <span className="myText text-xl font-semibold text-[#7D7D7D]">{value.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>
            </div>


            <style>
                {`
                     
                      @media (max-width: 1015px) {
                        .Business{
                            padding-right: 5rem!important;
                            padding-left: 5rem!important;
                        }
                       }
                       @media (max-width: 815px) {
                        .Business{
                            padding-right: 2rem!important;
                            padding-left: 2rem!important;
                            padding-bottom: 2rem!important;

                        }
                       .values{
                        padding-left: 2rem!important;
                       }

                       }
          @media (max-width: 1428px) {
           .Left  {
            width: 100%!important;
            padding-bottom: 5rem!important;
           }
           .Right  {
            width: 100%!important;
            
           }
           .Rightleft {
            margin-left: 5rem!important;
           }
     
          }  
         
            
          @media (max-width: 505px) {
           
            .Rightleft {
             margin-left: 0rem!important;
            }
            .Right {
                display:none!important;
            }
            .myText{
                font-size: 15px;important;
            }
            
           }  
           @media (max-width: 912px) {
           
            .TextImg {
                font-size: 2.125rem;important;
            }
            
           } 

           @media (max-width: 646px) {
           
            .TextImg {
                font-size: 1.125rem;important;
            }
            
           }
           


          `}
            </style>
        </>
    );
};

export default ServicesSingle;