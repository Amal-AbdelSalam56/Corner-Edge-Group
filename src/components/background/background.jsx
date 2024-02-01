
import { useEffect, useState } from "react";
import img1 from "../../assets/images/Banner00.png";
import imag2 from "../../assets/images/imag2.png";
import imag3 from "../../assets/images/imag3.png";
import imag4 from "../../assets/images/imag4.png";
import { useNavigate } from 'react-router-dom';

const Background = () => {

    const navigate = useNavigate();

    const [currentImage, setCurrentImage] = useState(img1);
    const [buttonText, setButtonText] = useState("Strategic Healthcare Equipment Planning and Advisory Services.");

    const images1 = [imag3, imag4];
    const images2 = [imag2, img1];

    const handleMouseEnter1 = () => {
        setCurrentImage(images1[0]);
        setButtonText("Information and Communication Technology (ICT).");
        setTimeout(() => {
            setCurrentImage(images1[1]);
            setButtonText("Furniture, Fittings and Equipment (FFE) Advisory Services.");
        }, 500);
        // setTimeout(handleMouseEnter1, 500); //to repeat it
    };

    const handleMouseEnter2 = () => {
        setCurrentImage(images2[0]);
        setButtonText("Business Analysis and Architecture Advisory Service.");
        setTimeout(() => {
            setCurrentImage(images2[1]);
            setButtonText("Strategic Healthcare Equipment Planning and Advisory Services.");
        }, 500);
    };

    return (
        <>
            <div className="relative">
                <img src={currentImage} alt="Your Image" className="backImg w-full h-auto" />
                {/* Button */}
                <div className="absolute top-0 left-0 ">
                    <button className="blueDiv text-white font-semibold bg-[#30407B] py-6 pl-12 text-[20px] w-[52%] text-start">
                        {buttonText}
                    </button>
                </div>


                <div className="bgButtons absolute top-1/2 left-1/2 transform -translate-x-1/2 flex md:flex-col lg:flex-row gap-4">
                    <button
                        className="bgbutton bg-[#40DDB6] text-[#37393F] font-semibold px-4 py-2 rounded focus:outline-none  md:text-md lg:text-[16px]"
                        onMouseEnter={handleMouseEnter1}
                        onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}
                    >
                        Strategic Healthcare Equipment Planning
                    </button>
                    <button
                        className="bgbutton bg-white text-[#37393F] font-semibold px-4 py-2 rounded focus:outline-none  md:text-md lg:text-[16px]"
                        onMouseEnter={handleMouseEnter2}
                        onClick={() => { navigate('/business'); window.scrollTo(0, 0); }}
                    >
                        ICT Business analysis and architecture
                    </button>
                </div>


                <style>
                    {`
                    

          @media (max-width: 2023px) {
           .bgButtons {
            --tw-translate-y: 470%!important;
           }
          }
          @media (max-width: 1493px) {
            .bgButtons {
             --tw-translate-y:100%!important;
             
            }
           }
          @media (max-width: 900px) {
            .bgButtons {
             --tw-translate-y: 50%!important;
             
            }
           }
           

          @media (max-width: 768px) {
            .bgButtons {
                flex-direction: column!important;
                // font-size: 10px!important;

            }
            .bgButton {
                font-size: 10px!important;

            }
           }
           @media (max-width: 558px) {
            .bgButtons {
                --tw-translate-y: 10%!important;
                // font-size: 10px!important;
                width: 22rem!important;
                 font-size: small!important;
            }
            
           }
         
           @media (max-width: 471px) {
            .bgButtons {
                --tw-translate-y: -14%!important;
                // font-size: 6px!important;
                width: 22rem!important;
                font-size: small!important;
            }
         
           }

           @media (max-width: 1063px) {
           
            .blueDiv{
                font-size: 9px!important;
                padding-left: 1rem!important;
                padding-top: 0.5rem!important;
                padding-bottom: 0.5rem!important;

            }
           }




           
        `}
                </style>




            </div>

        </>
    );
};

export default Background;
