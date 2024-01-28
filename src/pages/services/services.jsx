/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import Boxgreen from "../../assets/images/Boxgreen.png";
import Banner from "../../assets/images/Banner.png";
import room from "../../assets/images/room.png";
import patient from "../../assets/images/patient.png";
import tender2 from "../../assets/images/tender2.png";
import hand from "../../assets/images/hand.png";
import genetic from "../../assets/images/genetic.png";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from 'react';
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


const Card = ({ title, imageSrc, buttonText, onButtonClick }) => (
    <div className="our border text-left border-[#F4F4F4] overflow-hidden max-w-xs mx-auto my-8 bg-[#F4F4F4]">
        <div className="flex items-center justify-between p-4 ">
            <h2 className="text-xl font-semibold">{title}</h2>
            {/* <img src={imageSrc} alt={title} className="w-16 h-16 object-cover bg-[#40DDB6] rounded-full" /> */}
            <img src={imageSrc} alt="Tendering and Procurement" className="bg-[#2FD794] w-16 h-16 m-auto mt-8 object-none rounded-full" />
        </div>
        <div className="p-4 float-left cursor-pointer">
            <a
                className={`py-2 px-4 font-semibold rounded ${imageSrc === patient ? 'text-[#40DDB6]' : 'text-[#29366E]'} `}
                onClick={onButtonClick}
            >
                {buttonText}
            </a>
        </div>
    </div>
);



const Services = () => {
    const navigate = useNavigate();

    const [buttonText, setButtonText] = useState('More Services');

    const [showMoreServices, setShowMoreServices] = useState(false);

    const handleMoreClick = () => {
        if (showMoreServices == false) {
            setShowMoreServices(true);
            setButtonText("Show Less")
        } else {
            setShowMoreServices(false);
            setButtonText("More Services")
        }

    };
    // const () => handleReadMoreClick = () => {
    //     navigate('/servicesSingle')
    // };

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

    };

    return (
        <>
            <div className="relative">
                {/* Image */}
                <img src={Banner} alt="Your Image" className="w-full h-auto" />

            </div>

            <div className="Business text-center mx-80 mb-20 mt-20">
                <h1 className="text-2xl font-bold mb-8 flex items-center justify-center">
                    <span>
                        <img src={Boxgreen} style={{ height: "fit-content", marginRight: "10px" }} />
                    </span>
                    Our Services
                </h1>
                <div className="flex justify-around mb-20 flex-wrap ">
                    {/* Card 1 */}
                    <Card
                        title="Medical Equip-ment Planning"
                        imageSrc={room}
                        buttonText="Read More"
                        onButtonClick={() => handleReadMoreClick('Medical')}
                    />

                    {/* Card 2 */}
                    <Card
                        title="Furniture, Fixtures  ,
                          and Equipment "
                        imageSrc={patient}
                        buttonText="Read More"
                        onButtonClick={() => handleReadMoreClick('Furniture')}
                    />

                    {/* Card 3 */}
                    <Card
                        title="Tendering & Procurement"
                        imageSrc={tender2}
                        buttonText="Read More"
                        onButtonClick={() => handleReadMoreClick('Tendering')}
                    />

                    {/* Card 4 */}
                    <Card
                        title="Acceptance and Handover"
                        imageSrc={hand}
                        buttonText="Read More"
                        onButtonClick={() => handleReadMoreClick('Acceptance')}
                    />
                    {/* Card 5 */}
                    <Card
                        title="Biomedical Equip - ment managment"
                        imageSrc={genetic}
                        buttonText="Read More"
                        onButtonClick={() => handleReadMoreClick('Biomedical')}
                    />

                    {showMoreServices && (
                        <>
                            {/* Card 6 */}
                            <Card
                                title="Enterprise Architecture Analysis"
                                imageSrc={room}
                                buttonText="Read More"
                                onButtonClick={() => handleReadMoreClick('Enterprise')}
                            />

                            {/* Card 7 */}
                            <Card
                                title="Digital Transformation Strategies"
                                imageSrc={patient}
                                buttonText="Read More"
                                onButtonClick={() => handleReadMoreClick('Digital')}
                            />

                            {/* Card 8 */}
                            <Card
                                title="Requirement Management"
                                imageSrc={tender2}
                                buttonText="Read More"
                                onButtonClick={() => handleReadMoreClick('Requirement')}
                            />

                            {/* Card 9 */}
                            <Card
                                title="Cost Savings in Product Management and Evolution."
                                imageSrc={hand}
                                buttonText="Read More"
                                onButtonClick={() => handleReadMoreClick('Cost')}
                            />
                            {/* Card 10 */}
                            <Card
                                title="Business Process Improvement"
                                imageSrc={genetic}
                                buttonText="Read More"
                                onButtonClick={() => handleReadMoreClick('Business')}
                            />
                        </>
                    )}

                    {/* Card 11 */}
                    <div className="border border-[#F4F4F4] overflow-hidden max-w-md mx-auto my-8 
                    bg-[#29366E] text-white">
                        <div className="flex justify-center text-center m-auto px-24 py-20">
                            <h2 className="text-xl font-semibold" onClick={handleMoreClick}>{buttonText}</h2>
                        </div>
                    </div>

                </div>



            </div>

            <style>
                {`
            
            @media (max-width: 1275px) {
                .Business  {
                    margin-left: 10rem;
                    margin-right: 10rem;
               
                }
             }    
              @media (max-width: 1015px) {
                .Business{
                    margin-right: 5rem!important;
                    margin-left: 5rem!important;
                }
               }
               @media (max-width: 815px) {
                .Business{
                    margin-right: 2rem!important;
                    margin-left: 2rem!important;
                }
               }
         `}
            </style>
        </>
    );
};

export default Services;