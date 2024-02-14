import React, { useState } from 'react';
import Banner11 from "../../assets/images/Banner11.png";
import t1 from "../../assets/images/tt1.jpg";
import t2 from "../../assets/images/tt2.jpg";
import t3 from "../../assets/images/Photo.jpg";
import t4 from "../../assets/images/t4.jpg";
import t5 from "../../assets/images/t5.jpg";
import Fb from "../../assets/images/Fb.png";
import Twiter from "../../assets/images/Twiter.png";
import Pintrest from "../../assets/images/Pintrest.png";
import './ourTeam.css'
const TeamMemberCard = ({ name, imageUrl, job, para, }) => {

    const [isHovered, setIsHovered] = useState(false);


    return (
        <div className="relative max-w-sm rounded w-[386px] h-[532px] overflow-hidden mx-auto my-8 shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="group relative h-[-webkit-fill-available]">
                <img className="w-full h-[inherit] object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src={imageUrl} alt={name} />
                <div className={`absolute bg-[#6B77E5B2!important] inset-0 flex justify-center items-start pt-[80px] gap-4  ${isHovered ? 'opacity-100' : 'opacity-0'}  transition duration-300`}>
                    <button className="bg-[#40DDB6] hover:bg-blue-700 text-white font-bold p-[1rem]  rounded-full">
                        <img src={Fb} alt="Social Media Icon 2" className="w-6" /></button>
                    <button className="bg-[#40DDB6] hover:bg-blue-700 text-white font-bold p-[1rem]  rounded-full">
                        <img src={Twiter} alt="Social Media Icon 2" className="w-6" /></button>
                    <button className="bg-[#40DDB6] hover:bg-blue-700 text-white font-bold p-[1rem]  rounded-full">
                        <img src={Pintrest} alt="Social Media Icon 2" className="w-6" /></button>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 m-5 w-[-webkit-fill-available] bg-white bg-opacity-75 py-[1.5rem] px-4">
                <p className="text-lg font-bold text-gray-800">{name}</p>
                <p className="text-sm font-semibold text-[#7D7D7D]">{job}</p>
                <p className={`text-sm font-semibold h-[33vh] overflow-auto mt-5 text-[#7D7D7D] ${isHovered ? 'block' : 'hidden'}`}>
                    {para}
                </p>
            </div>
        </div>
    );
};

const TeamPage = () => {
    const teamMembers = [
        { name: 'Scott Rodgers', imageUrl: t1, job: 'Principle Advisor', para: 'Scott is a member of the governing council of the professional institute representing Management Consultants in Aotearoa, the New Zealand Institute of Management Consultants.He has held governance, executive and line management, programme and project management, operations management, management consulting, and product and service design and development roles.Scott has been leading business design, strategy development, change programmes, investment advice, high-value procurement, probity, audit and assurance, and interim leadership activities for Government and the Private.' },
        { name: 'Mohamed Ahmed', imageUrl: t2, job: 'Senior Business & Engineering Consultant', para: 'Mohamed is a Senior Business and Engineering Consultant Mohamed is experienced engineer with a strong professional background, holding prestigious certifications including MIEAust CPEng, RPEQ, PMP, and CBAP.Mohamed demonstrates a commitment to upholding industry standards and regulations. He Skilled in project management and business analysis, with a proven track record of delivering successful engineering projects while adhering to high-quality standards and ethical principles.' },
        { name: 'Manas Sukumara', imageUrl: t3, job: 'Specialist Advisor & Project Manager', para: 'Manas has over 14 Years of experience across various industries including biomedical engineering, technology, services, and technical support.Proven and Successful completion of various project for DFAT Australia as well as other NGOs and AID agencies.Manas ’s focus on collaborating with cross-discipline teams to deliver on major projects allow him to improve healthcare outcomes with technical and operational competencies within clinical contexts.His extensive commercial and technical expertise across various imaging modalities provides a comprehensive understanding of challenges and opportunities, enabling the ability to enhance value in the procurement of new equipment.' },
        // { name: 'Wanda Forsyth', imageUrl: t4, job: 'Designer', para: '' },
        // { name: 'Jonathan Coleman', imageUrl: t5, job: 'Managing Director', para: '' },
        // { name: 'David Simpson', imageUrl: t1, job: 'Designer', para: '' },
    ];

    return (
        <>
            <div className="relative">
                {/* Image */}
                <img src={Banner11} alt="Your Image" className="w-full h-auto" />
            </div>
            <div className="Business text-center mx-[130px] mb-20 mt-20">
                <div className="cards flex flex-wrap justify-around mb-20 m-16">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} name={member.name} imageUrl={member.imageUrl} job={member.job} para={member.para} />
                    ))}
                </div>
            </div>

            <style>
                {`

              @media (max-width: 435px) {
                .Business {
                    margin: 0!important;
    
                }
                .cards{
                    margin: 1rem!important;
                }
             

         `}
            </style>
        </>
    );
};

export default TeamPage;
