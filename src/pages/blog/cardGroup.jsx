/* eslint-disable react/prop-types */
import user from "../../assets/images/user.png";
import ticket from "../../assets/images/ticket.png";

import { useNavigate } from 'react-router-dom';

const CardGroup = ({ bigImg, header, contant }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="CardGroup flex flex-col items-center mr-8 mb-8">
                <img
                    src={bigImg}
                    alt="Image 1"
                    className="group w-[592px] h-auto mb-0"
                />

                <div className=" flex w-full h-[65px]">
                    <button className="text-white bg-[#30407B] py-2 px-4 w-1/3">
                        April 13, 2021
                    </button>
                    <button className="flex items-center justify-center text-[#208068] bg-[#40DDB6] py-2 px-4 w-1/3">
                        <img
                            src={user}
                            alt="Image 1"
                            className="mr-2"
                        />
                        Miranda Doe
                    </button>
                    <button className="flex items-center justify-center text-[#208068] bg-[#40DDB6] py-2 px-4 w-1/3">
                        <img
                            src={ticket}
                            alt="Image 1"
                            className="mr-2"
                        />
                        Business
                    </button>
                </div>

                <div className="group w-[592px] mt-6">
                    <p className="text-3xl font-bold mb-2">{header}</p>
                    <p className="text-lg text-[#797979] mb-2">{contant}</p>
                </div>
                <div className="group  w-[592px] py-4 float-left cursor-pointer">
                    <a className="py-2  font-semibold rounded text-[#29366E]" onClick={() => navigate('/blogSingle')}>
                        Read More
                    </a>
                </div>
            </div>




            <style>
                {`
           
                @media ( max-width: 562px) {
                    .group {
                        width: 100%!important;
                    }
                    .CardGroup {
                        
                        margin-right: 0!important;
                        padding: 1rem!important;

                    }
                } 
  
         `}
            </style>
        </>
    );
};

export default CardGroup;