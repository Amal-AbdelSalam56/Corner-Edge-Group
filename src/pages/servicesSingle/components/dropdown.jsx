import React, { useState } from 'react';
import light from "../../../assets/images/light.svg";
import dark from "../../../assets/images/dark.svg";
import upicon from "../../../assets/images/upicon.png";
import { useNavigate } from 'react-router-dom';
import Banner1 from "../../../assets/images/Banner1.png";
import img9 from "../../../assets/images/img9.png";
import Banner2 from "../../../assets/images/Banner2.png";
import Photo2 from "../../../assets/images/Photo2.png";
import Banner3 from "../../../assets/images/Banner3.png";
import Photo3 from "../../../assets/images/Photo3.png";
import Banner4 from "../../../assets/images/Banner4.png";
import Photo4 from "../../../assets/images/Photo4.jpg";
import Banner5 from "../../../assets/images/Banner5.png";
import Photo5 from "../../../assets/images/Photo5.jpg";
import Banner6 from "../../../assets/images/Banner6.png";
import Photo6 from "../../../assets/images/Photo6.jpg";
import Banner7 from "../../../assets/images/Banner7.png";
import Photo7 from "../../../assets/images/Photo7.jpg";
import Banner8 from "../../../assets/images/Banner8.png";
import Photo8 from "../../../assets/images/Photo8.jpg";
import Banner9 from "../../../assets/images/Banner9.png";
import Photo9 from "../../../assets/images/Photo9.png";
import Banner10 from "../../../assets/images/Banner10.png";
import Photo10 from "../../../assets/images/Photo10.jpg";

const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const navigate = useNavigate();


    const handleItemClick = (item) => {
        setSelectedItem(item);
        if (item == 'Medical Equipment Planning') {
            handleReadMoreClick('Medical');
        } else if (item == 'Furniture, Fittings, and Equipment') {
            handleReadMoreClick('Furniture');
        } else if (item == 'Tendering & Procurement') {
            handleReadMoreClick('Tendering');
        } else if (item == 'Acceptance and Handover') {
            handleReadMoreClick('Acceptance');
        } else if (item == 'Biomedical Equipment Management') {
            handleReadMoreClick('Biomedical');
        } else if (item == 'Enterprise Architecture Analysis') {
            handleReadMoreClick('Enterprise');
        } else if (item == 'Requirements Management') {
            handleReadMoreClick('Requirement');
        } else if (item == 'Mapping Value Streams and Customer Journeys') {
            handleReadMoreClick('Cost');
        } else if (item == 'Business Process Improvement') {
            handleReadMoreClick('Business');
        } else if (item == 'Digital Transformation Strategies') {
            handleReadMoreClick('Digital');
        }
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
            titl = 'Furniture, Fixtures, and Equipment';
            content = 'We seamlessly integrate operational and technical knowledge in healthcare facilities. Understanding the connections between furniture, equipment planning, and procurement enables us to enhance facility efficiency and safety holistically.';
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
            titl = 'Tendering & Procurement ';
            content = 'We proficiently collect diverse requirements to formulate comprehensive specifications to support the issuing of tender documents, and ultimately awarding contracts to the chosen suppliers. The goal is to ensure the acquisition of high-quality, cost-effective items that meet the specific needs and standards of the project or organization.';
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
            content = 'We advise on the formal processes of acknowledging and transferring ownership or responsibility for medical devices. This typically includes thorough inspections, testing, and verification to ensure that the equipment meets specified standards and requirements. This ensures a smooth transition and effective utilization of the medical equipment in its intended healthcare setting.';
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
            content = 'We conduct on-site audits of clinical and non-clinical equipment, analyzing the hospitals asset list to ensure optimal performance, safety, and regulatory compliance. Our management approach encompasses inventory control, asset tracking, and documentation of equipment history, aiming to enhance patient care, prolong equipment lifespan, and minimize disruptions, ultimately improving the overall efficiency and reliability of medical services.';
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
        <div className="relative">
            {/* Dropdown button */}
            <button
                className={`Dropdownbutton py-4 px-6 text-white font-semibold w-[28rem] mb-2 bg-[#1D2F71] justify-between flex rounded-lg focus:outline-none`}
                onClick={handleToggle}
            >

                {title}  <img src={upicon} className="mr-2 mt-2" />
            </button>

            {/* Dropdown items */}
            {isOpen && (
                <div className={`Dropdownbutton static w-[28rem] border-2 border-[#D6D6D6]  top-10 right-0 bg-white py-4 px-4 rounded-lg `}>
                    {items.map((item, index) => (
                        <div key={index} className={`cursor-pointer mb-5 flex ${selectedItem === item ? 'text-[#1D2F71]' : 'text-[#6B6B6B]'} font-semibold`}
                            onClick={() => handleItemClick(item)}>
                            {selectedItem === item ? (
                                <img src={dark} alt={item} className="mr-2" />
                            ) : (
                                <img src={light} alt={item} className="mr-2" />
                            )}
                            {item}
                        </div>
                    ))}
                </div>
            )}



            <style>
                {`
                    
@media (max-width: 505px) {
            
            .Dropdownbutton {
            width: 100%!important;
            }
        }
            `}
            </style>






        </div>
    );
};

export default Dropdown;
