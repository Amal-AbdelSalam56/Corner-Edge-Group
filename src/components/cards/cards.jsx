import bed from "../../assets/images/bed.png";
import ventilator from "../../assets/images/ventilator.png";
import tender from "../../assets/images/tender.png";
import love from "../../assets/images/love.png";
import agile from "../../assets/images/agile.png";
import business from "../../assets/images/business.png";
import team from "../../assets/images/team.png";
import growth from "../../assets/images/growth.png";
import plus from "../../assets/images/plus 2.png";
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
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const [isHovered, setHovered] = useState(false);
    const [isHovered2, setHovered2] = useState(false);
    const navigate = useNavigate();

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


            <div className="fgroub flex justify-around mb-8 flex-wrap bg-[#F4F4F4]"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>

                {/* <h1
                        className={`text-3xl font-bold mb-8 w-full text-white  ${isHovered ? 'visible' : 'invisible'}`}>
                        Strategic Healthcare Equipment Planning
                    </h1> */}
                {isHovered && (
                    <h1
                        className="text-[28px] font-bold mb-8 w-full text-white ">
                        Strategic Healthcare Equipment Planning
                    </h1>
                )}


                {/* Card 1 */}
                <div className={`${!isHovered2 ? 'h-60 w-48' : 'h-[9rem] w-[9rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden cursor-pointer`}
                    onClick={() => { handleReadMoreClick('Medical'); window.scrollTo(0, 0); }} >
                    <img src={ventilator} alt="Medical Equipment Planning" className={`bg-[#2FD794] ${!isHovered2 ? 'w-24 h-24' : 'h-[4rem] w-[4rem]'}  m-auto mt-8 object-none rounded-full`} />
                    {!isHovered2 && (
                        <div className="p-4 para">
                            <p className="text-[16px] font-semibold mb-2">Medical Equipment Planning </p>

                        </div>
                    )}
                </div>

                {/* Card 2 */}
                <div className={`${!isHovered2 ? 'h-60 w-48' : 'h-[9rem] w-[9rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden cursor-pointer`}
                    onClick={() => { handleReadMoreClick('Furniture'); window.scrollTo(0, 0); }} >
                    <img src={bed} alt="Furniture, Fixtures, and Equipment" className={`bg-[#2FD794] ${!isHovered2 ? 'w-24 h-24' : 'h-[4rem] w-[4rem]'} m-auto mt-8 object-none rounded-full`} />
                    {!isHovered2 && (
                        <div className="p-4 para">
                            <p className="text-[16px] font-semibold mb-2">Furniture, Fixtures, and Equipment</p>
                        </div>
                    )}
                </div>

                {/* Card 3 */}
                <div className={`${!isHovered2 ? 'h-60 w-48' : 'h-[9rem] w-[9rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden cursor-pointer`}
                    onClick={() => { handleReadMoreClick('Tendering'); window.scrollTo(0, 0); }} >
                    <img src={tender} alt="Tendering and Procurement" className={`bg-[#2FD794] ${!isHovered2 ? 'w-24 h-24' : 'h-[4rem] w-[4rem]'} m-auto mt-8 object-none rounded-full`} />
                    {!isHovered2 && (
                        <div className="p-4 para">
                            <p className="text-[16px] font-semibold mb-2">Tendering and Procurement</p>
                        </div>
                    )}
                </div>

                {/* Card 4 */}
                <div className={`${!isHovered2 ? 'h-60 w-48' : 'h-[9rem] w-[9rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden cursor-pointer`}
                    onClick={() => { handleReadMoreClick('Acceptance'); window.scrollTo(0, 0); }} >
                    <img src={love} alt="Acceptance and Handover" className={`bg-[#2FD794] ${!isHovered2 ? 'w-24 h-24' : 'h-[4rem] w-[4rem]'} m-auto mt-8 object-none rounded-full`} />
                    {!isHovered2 && (
                        <div className="p-4 para">
                            <p className="text-[16px] font-semibold mb-2">Acceptance and Handover</p>
                        </div>
                    )}
                </div>

                {/* Card 5 */}
                <div className={`${!isHovered2 ? 'h-60 w-48' : 'h-[9rem] w-[9rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden cursor-pointer`}
                    onClick={() => { navigate('/services'); window.scrollTo(0, 0); }} >
                    <img src={plus} alt="See More" className={`bg-[#2FD794] ${!isHovered2 ? 'w-24 h-24' : 'h-[4rem] w-[4rem]'} m-auto mt-8 object-none rounded-full`} />
                    {!isHovered2 && (
                        <div className="p-4 para">
                            <p className="text-[16px] font-semibold mb-2">See More</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="sgroub flex justify-around mb-8 flex-wrap bg-[#F4F4F4]"
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}>

                {/* <h1
                        className={`text-3xl font-bold mb-8 w-full text-white  ${isHovered2 ? 'visible' : 'invisible'}`}>
                        ICT Business analysis and architecture
                    </h1> */}

                {isHovered2 && (
                    <h1
                        className="text-[28px] font-bold my-8 w-full text-white ">
                        ICT Business analysis and architecture
                    </h1>
                )}

                {/* Card 1 */}
                <div className={`${!isHovered ? 'h-60 w-48' : 'h-[9rem] w-[9rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden cursor-pointer`}
                    onClick={() => { handleReadMoreClick('Business'); window.scrollTo(0, 0); }} >
                    <img src={agile} alt="Agile Business Analysis" className={`bg-[#2FD794] ${!isHovered ? 'w-24 h-24' : 'h-[4rem] w-[4rem]'} m-auto mt-8 object-none rounded-full`} />

                    {!isHovered && (
                        <div className="p-4 para">
                            <p className="text-[16px] font-semibold mb-2">Agile Business Analysis</p>

                        </div>
                    )}
                </div>

                {/* Card 2 */}
                <div className={`${!isHovered ? 'h-60 w-48' : 'h-[9rem] w-[9rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden cursor-pointer`}
                    onClick={() => { handleReadMoreClick('Digital'); window.scrollTo(0, 0); }} >
                    <img src={business} alt="Digital Business Analysis" className={`bg-[#2FD794] ${!isHovered ? 'w-24 h-24' : 'h-[4rem] w-[4rem]'} m-auto mt-8 object-none rounded-full`} />

                    {!isHovered && (
                        <div className="p-4 para">
                            <p className="text-[16px] font-semibold mb-2">Digital Business Analysis</p>
                        </div>
                    )}
                </div>

                {/* Card 3 */}
                <div className={`${!isHovered ? 'h-60 w-48' : 'h-[9rem] w-[9rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden cursor-pointer`}
                    onClick={() => { handleReadMoreClick('Enterprise'); window.scrollTo(0, 0); }} >
                    <img src={team} alt="Architecture Analysis" className={`bg-[#2FD794] ${!isHovered ? 'w-24 h-24' : 'h-[4rem] w-[4rem]'} m-auto mt-8 object-none rounded-full`} />
                    {!isHovered && (
                        <div className="p-4 para">
                            <p className="text-[16px] font-semibold mb-2">Architecture Analysis</p>
                        </div>
                    )}
                </div>

                {/* Card 4 */}
                <div className={`${!isHovered ? 'h-60 w-48' : 'h-[9rem] w-[9rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden cursor-pointer`}
                    onClick={() => { handleReadMoreClick('Business'); window.scrollTo(0, 0); }} >
                    <img src={growth} alt="Acceptance and Handover" className={`bg-[#2FD794] ${!isHovered ? 'w-24 h-24' : 'h-[4rem] w-[4rem]'} m-auto mt-8 object-none rounded-full`} />
                    {!isHovered && (
                        <div className="p-4 para">
                            <p className="text-[16px] font-semibold mb-2">Process Improvement</p>
                        </div>
                    )}
                </div>

                {/* Card 5 */}
                <div className={`${!isHovered ? 'h-60 w-48' : 'h-[9rem] w-[9rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden cursor-pointer`}
                    onClick={() => { navigate('/services'); window.scrollTo(0, 0); }} >
                    <img src={plus} alt="See More" className={`bg-[#2FD794] ${!isHovered ? 'w-24 h-24' : 'h-[4rem] w-[4rem]'} m-auto mt-8 object-none rounded-full`} />
                    {!isHovered && (
                        <div className="p-4 para">
                            <p className="text-[16px] font-semibold mb-2">See More</p>
                        </div>
                    )}
                </div>
            </div>





            <style>
                {`
                  @media (max-width: 1445px) {
                       .Cards {
                        margin-left: 15rem!important;
                         margin-right: 15rem!important;
            
                       }
                       .Card {
                        margin-bottom: 2rem;
    
                     }
                  }

               @media (max-width: 1255px) {
                        .Cards {
                         margin-left: 10rem!important;
                          margin-right: 10rem!important;
             
                     }
                }
                
                @media (max-width: 1105px) {
                    .Cards {
                     margin-left: 5rem!important;
                     margin-right: 5rem!important;
                 }
                 .Card {
                    margin-bottom: 2rem;

                 }
                }
                
                @media (max-width: 940px) {
                    .Cards {
                     margin-left: 2rem!important;
                     margin-right: 2rem!important;
                 }
                 .fgroub {
                    margin-bottom: 0rem;
                 }
                 
                }

                @media (max-width: 450px) {
                   .Card {
                        width: 10rem!important;
                     
                    }
                    .Cards {
                        margin-left: 0rem!important;
                        margin-right: 0rem!important;
                        margin-bottom: 0rem!important;
                    }
                    .fgroub, .sgroub {
                        padding-left: 0rem!important;
                        padding-right: 0rem!important;
                        padding-bottom: 0rem!important;
                    }
                    .sgroub {
                        padding-top: 0rem!important;
                    }
                }   
                


                 @media (max-width: 384px) {
                    .Card {
                        // width: 15rem!important;   
                    }
                }
                    















        `}
            </style>







        </>
    );
};

export default Cards;




