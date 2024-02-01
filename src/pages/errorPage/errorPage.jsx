import img5 from "../../assets/images/Background Image.png";
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="relative text-center">

                <img src={img5} alt="Your Image" className="w-full h-auto" />

                {/* Text on Image */}
                <div className="Text1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[165%] sm:-translate-y-[253%] md:-translate-y-[155%] lg:-translate-y-[90%] xl:-translate-y-[100%] text-white text-[126px] font-bold">
                    404
                </div>

                <div className="Text2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[105%] sm:-translate-y-[105%] md:-translate-y-[-14%] lg:-translate-y-[-100%] xl:-translate-y-[-120%] text-white text-[46px] font-bold">
                    Oops! Page not found!
                </div>

                <p className="Text3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[155%] sm:-translate-y-[236%] md:-translate-y-[131%] lg:-translate-y-[-40%] xl:-translate-y-[-66%] text-white text-[16px]">
                    OOOPS! Page not found!
                </p>

                {/* Button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:translate-y-[27%] xl:translate-y-[228%] md:translate-y-[98%] flex">
                    <button
                        className="bg-[#40DDB6] text-[#37393F] font-semibold px-4 py-2 rounded focus:outline-none"
                        style={{ padding: "21px 27px" }}
                        onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
                    >
                        Back to Home
                    </button>
                </div>

            </div>
            <style>
                {`
  
            @media (min-width: 768px) {
                 .Text1 {
                   font-size: 6rem;
               } .Text2 {
                   font-size: 2rem;
               }
            }
            @media (max-width: 785px){
            .Text1 {
                font-size: 5rem;
                }
           }
           @media (max-width: 661px){
            .Text1 {
                font-size: 3rem;
              }
             .Text2 {
                font-size: 1.5rem;
            }
          }
           @media (max-width: 553px){
            .Text2 {
                font-size: 1rem!important;
            }
             .Text3 {
                display: none!important;
             }
            }

`}
            </style>
        </>
    );
};

export default ErrorPage;