import bed from "../../assets/images/bed.png";
import ventilator from "../../assets/images/ventilator.png";
import tender from "../../assets/images/tender.png";
import love from "../../assets/images/love.png";
import agile from "../../assets/images/agile.png";
import business from "../../assets/images/business.png";
import team from "../../assets/images/team.png";
import growth from "../../assets/images/growth.png";
import { useState } from "react";

const Cards = () => {
    const [isHovered, setHovered] = useState(false);
    const [isHovered2, setHovered2] = useState(false);

    return (
        <>
            <div className="Cards text-center mx-36 mb-16 flex-wrap">
                <h1 className="text-3xl font-bold mb-8">We Provide Professional Services</h1>

                <div className="fgroub flex justify-around mb-8 flex-wrap"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>

                    {/* <h1
                        className={`text-3xl font-bold mb-8 w-full text-white  ${isHovered ? 'visible' : 'invisible'}`}>
                        Strategic Healthcare Equipment Planning
                    </h1> */}
                    {isHovered && (
                        <h1
                            className="text-3xl font-bold mb-8 w-full text-white ">
                            Strategic Healthcare Equipment Planning
                        </h1>
                    )}


                    {/* Card 1 */}
                    <div className={`${!isHovered2 ? 'h-60 w-48' : 'h-[10rem] w-[10rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden`}>
                        <img src={ventilator} alt="Medical Equipment Planning" className="bg-[#2FD794] w-24 h-24 m-auto mt-8 object-none rounded-full	" />
                        {!isHovered2 && (
                            <div className="p-4 para">
                                <p className="text-lg font-semibold mb-2">Medical Equipment Planning </p>

                            </div>
                        )}
                    </div>

                    {/* Card 2 */}
                    <div className={`${!isHovered2 ? 'h-60 w-48' : 'h-[10rem] w-[10rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden`}>
                        <img src={bed} alt="Furniture, Fixtures, and Equipment" className="bg-[#2FD794] w-24 h-24 m-auto mt-8 object-none rounded-full" />
                        {!isHovered2 && (
                            <div className="p-4 para">
                                <p className="text-lg font-semibold mb-2">Furniture, Fixtures, and Equipment</p>
                            </div>
                        )}
                    </div>

                    {/* Card 3 */}
                    <div className={`${!isHovered2 ? 'h-60 w-48' : 'h-[10rem] w-[10rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden`}>
                        <img src={tender} alt="Tendering and Procurement" className="bg-[#2FD794] w-24 h-24 m-auto mt-8 object-none rounded-full" />
                        {!isHovered2 && (
                            <div className="p-4 para">
                                <p className="text-lg font-semibold mb-2">Tendering and Procurement</p>
                            </div>
                        )}
                    </div>

                    {/* Card 4 */}
                    <div className={`${!isHovered2 ? 'h-60 w-48' : 'h-[10rem] w-[10rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden`}>
                        <img src={love} alt="Acceptance and Handover" className="bg-[#2FD794] w-24 h-24 m-auto mt-8 object-none rounded-full" />
                        {!isHovered2 && (
                            <div className="p-4 para">
                                <p className="text-lg font-semibold mb-2">Acceptance and Handover</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="sgroub flex justify-around mb-8 flex-wrap"
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}>

                    {/* <h1
                        className={`text-3xl font-bold mb-8 w-full text-white  ${isHovered2 ? 'visible' : 'invisible'}`}>
                        ICT Business analysis and architecture
                    </h1> */}

                    {isHovered2 && (
                        <h1
                            className="text-3xl font-bold my-8 w-full text-white ">
                            ICT Business analysis and architecture
                        </h1>
                    )}

                    {/* Card 1 */}
                    <div className={`${!isHovered ? 'h-60 w-48' : 'h-[10rem] w-[10rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden`}>
                        <img src={agile} alt="Medical Equipment Planning" className="bg-[#2FD794] w-24 h-24 m-auto mt-8 object-none rounded-full" />

                        {!isHovered && (
                            <div className="p-4 para">
                                <p className="text-lg font-semibold mb-2">Agile Business Analysis</p>

                            </div>
                        )}
                    </div>

                    {/* Card 2 */}
                    <div className={`${!isHovered ? 'h-60 w-48' : 'h-[10rem] w-[10rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden`}>
                        <img src={business} alt="Furniture, Fixtures, and Equipment" className="bg-[#2FD794] w-24 h-24 m-auto mt-8 object-none rounded-full" />

                        {!isHovered && (
                            <div className="p-4 para">
                                <p className="text-lg font-semibold mb-2">Digital Business Analysis</p>
                            </div>
                        )}
                    </div>

                    {/* Card 3 */}
                    <div className={`${!isHovered ? 'h-60 w-48' : 'h-[10rem] w-[10rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden`}>
                        <img src={team} alt="Tendering and Procurement" className="bg-[#2FD794] w-24 h-24 m-auto mt-8 object-none rounded-full" />
                        {!isHovered && (
                            <div className="p-4 para">
                                <p className="text-lg font-semibold mb-2">Architecture Analysis</p>
                            </div>
                        )}
                    </div>

                    {/* Card 4 */}
                    <div className={`${!isHovered ? 'h-60 w-48' : 'h-[10rem] w-[10rem]'}  Card  border-4 border-[#2FD794] rounded-lg overflow-hidden`}>
                        <img src={growth} alt="Acceptance and Handover" className="bg-[#2FD794] w-24 h-24 m-auto mt-8 object-none rounded-full" />
                        {!isHovered && (
                            <div className="p-4 para">
                                <p className="text-lg font-semibold mb-2">Process Improvement</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>




            <style>
                {`
                  @media (max-width: 1445px) {
                       .Cards {
                        margin-left: 15rem!important;
                         margin-right: 15rem!important;
            
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




