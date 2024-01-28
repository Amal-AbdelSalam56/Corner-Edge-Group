
import { useEffect, useState } from "react";
import img1 from "../../assets/images/img1.png";
import imag2 from "../../assets/images/imag2.png";
import imag3 from "../../assets/images/imag3.png";
import imag4 from "../../assets/images/imag4.png";
import { useNavigate } from 'react-router-dom';

const Background = () => {
    const navigate = useNavigate();

    const [currentImage, setCurrentImage] = useState(0);
    const images = [imag3, imag2, img1, imag4];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    return (
        <>

            {/* <div className="relative">
                {/* Image 
                <img src={img1} alt="Your Image" className="w-full h-auto" />

                {/* Buttons       --tw-translate-y: 228%; 
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[228%] flex gap-4">
                    <button
                        className="bg-[#40DDB6] text-[#37393F] font-semibold px-4 py-2 rounded focus:outline-none text-base md:text-lg lg:text-xl"
                        onClick={handleButtonClick1}
                        style={{ padding: "21px 27px" }} >
                        Strategic Healthcare Equipment Planning
                    </button>
                    <button
                        className="bg-white  text-[#37393F] font-semibold px-4 py-2 rounded focus:outline-none text-base md:text-lg lg:text-xl"
                        onClick={handleButtonClick2}
                    >
                        ICT Business analysis and architecture
                    </button>
                </div>
            </div> */}

            <div className="relative ">
                {/* Image */}
                <img src={images[currentImage]} alt="Your Image" className="backImg w-full h-auto" />

                {/* Buttons */}
                <div className="bgButtons absolute top-1/2 left-1/2 transform -translate-x-1/2 flex md:flex-col lg:flex-row gap-4">
                    <button
                        className="bgbutton bg-[#40DDB6] text-[#37393F] font-semibold px-4 py-2 rounded focus:outline-none  md:text-md "
                        onClick={() => navigate('/menu')}
                    >
                        Strategic Healthcare Equipment Planning
                    </button>
                    <button
                        className="bgbutton bg-white text-[#37393F] font-semibold px-4 py-2 rounded focus:outline-none  md:text-md lg:text-lg"
                        onClick={() => navigate('/business')}
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

          




           
        `}
                </style>




            </div>

        </>
    );
};

export default Background;
