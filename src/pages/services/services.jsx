import Boxgreen from "../../assets/images/Boxgreen.png";
import Banner from "../../assets/images/Banner.png";
import room from "../../assets/images/room.png";
import patient from "../../assets/images/patient.png";
import tender2 from "../../assets/images/tender2.png";
import hand from "../../assets/images/hand.png";
import genetic from "../../assets/images/genetic.png";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";



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
    const handleReadMoreClick = () => {
        navigate('/servicesSingle')
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
                        title="Medical Equip-ment Planning "
                        imageSrc={room}
                        buttonText="Read More"
                        onButtonClick={handleReadMoreClick}
                    />

                    {/* Card 2 */}
                    <Card
                        title="Furniture, Fixtures  ,
                          and Equipment "
                        imageSrc={patient}
                        buttonText="Read More"
                        onButtonClick={handleReadMoreClick}
                    />

                    {/* Card 3 */}
                    <Card
                        title="Tendering & Procurement"
                        imageSrc={tender2}
                        buttonText="Read More"
                        onButtonClick={handleReadMoreClick}
                    />

                    {/* Card 4 */}
                    <Card
                        title="Acceptance and Handover"
                        imageSrc={hand}
                        buttonText="Read More"
                        onButtonClick={handleReadMoreClick}
                    />
                    {/* Card 5 */}
                    <Card
                        title="Biomedical Equip - ment managment"
                        imageSrc={genetic}
                        buttonText="Read More"
                        onButtonClick={handleReadMoreClick}
                    />

                    {showMoreServices && (
                        <>
                            {/* Card 6 */}
                            <Card
                                title="Enterprise Architecture Analysis"
                                imageSrc={room}
                                buttonText="Read More"
                                onButtonClick={handleReadMoreClick}
                            />

                            {/* Card 7 */}
                            <Card
                                title="Digital Transformation Strategies"
                                imageSrc={patient}
                                buttonText="Read More"
                                onButtonClick={handleReadMoreClick}
                            />

                            {/* Card 8 */}
                            <Card
                                title="Requirement Management"
                                imageSrc={tender2}
                                buttonText="Read More"
                                onButtonClick={handleReadMoreClick}
                            />

                            {/* Card 9 */}
                            <Card
                                title="Cost Savings in Product Management and Evolution."
                                imageSrc={hand}
                                buttonText="Read More"
                                onButtonClick={handleReadMoreClick}
                            />
                            {/* Card 10 */}
                            <Card
                                title="Business Process Improvement"
                                imageSrc={genetic}
                                buttonText="Read More"
                                onButtonClick={handleReadMoreClick}
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