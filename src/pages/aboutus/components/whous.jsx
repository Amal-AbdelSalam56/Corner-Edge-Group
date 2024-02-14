
import hands from "../../../assets/images/hands.jpg";
import checkgreen from "../../../assets/images/checkgreen.svg";



const WhoUs = () => {

    return (
        <>
            <div className="flex-wrap flex bg-white text-[#37393F] ">
                {/* Left Half */}
                <div className="Left w-1/2 pl-40 p-20 bg-[#F4F4F4]">
                    <img src={hands} alt="Team Image" className="w-full h-auto mb-4" />
                    <p className="mb-4 text-[#7D7D7D] text-lg">
                        We act as a bridge between stakeholders and technology, ensuring that technology investments yield maximum value and support the organization’s overall objectives
                    </p>

                    <p className="">
                        <a href="/contact" className=" text-[#37393F] text-xl font-semibold border-b border-[#37393F] pb-2">Get in Touch</a>
                    </p>
                </div>

                {/* Right Half */}
                <div className="Right w-1/2 pr-4 py-36 px-14">
                    <h1 className="text-4xl font-bold mb-4">Who we are:</h1>
                    {/* <p className="mb-4 text-[#7D7D7D] text-lg">
                        Our Biomedical Engineering and Strategic Healthcare Equipment Planning team specializes in
                    </p>
                    <p className="mb-4 text-[#7D7D7D] text-lg">
                        -	FF&E (Furniture, Fittings & Equipment) <br />
                        -	BioMedical Engineering  <br />
                        -	Medical Equipment Planning and   <br />
                        -	Equipment Procurement.    <br />
                    </p>
                    <p className="mb-4 text-[#7D7D7D] text-lg">
                        Our commitment to delivering exceptional value and a comprehensive suite of services tailored to healthcare facility requirements is what sets us apart in this competitive landscape.
                    </p >



                    <p className="mb-4 text-[#7D7D7D] text-lg">
                        The Business Analysis and Business Architecture team focuses on:<br />
                        -	Conducts thorough analyses,<br />
                        -	Identify opportunities to streamline processes.<br />
                        -	Design and implement resilient business architectures, delineating frameworks and structures to enhance operational efficiency.
                    </p >

                    <p className=" text-[#7D7D7D] text-lg mb-16">
                        Our collaborative approach bridges the gap between business goals and technological solutions.
                    </p> */}

                    <div className="our border border-[#E3E3E3] rounded-sm p-6  mb-8">
                        <p className="mb-4 text-[#7D7D7D] text-lg">
                            Our Biomedical Engineering and Strategic Healthcare Equipment Planning team specializes in
                        </p>
                        <p className="mb-4 text-[#7D7D7D] text-lg">
                            -	FF&E (Furniture, Fittings & Equipment) <br />
                            -	BioMedical Engineering  <br />
                            -	Medical Equipment Planning and   <br />
                            -	Equipment Procurement.    <br />
                        </p>
                        <p className="mb-4 text-[#7D7D7D] text-lg">
                            Our commitment to delivering exceptional value and a comprehensive suite of services tailored to healthcare facility requirements is what sets us apart in this competitive landscape.
                        </p >
                    </div>

                    <div className="our border border-[#E3E3E3] rounded-sm p-6 ">
                        <p className="mb-4 text-[#7D7D7D] text-lg">
                            The Business Analysis and Business Architecture team focuses on:<br />
                            -	Conducts thorough analyses,<br />
                            -	Identify opportunities to streamline processes.<br />
                            -	Design and implement resilient business architectures, delineating frameworks and structures to enhance operational efficiency.
                        </p >

                        <p className=" text-[#7D7D7D] text-lg mb-16">
                            Our collaborative approach bridges the gap between business goals and technological solutions.
                        </p>
                    </div>






                </div >

            </div >



            <style>
                {`
            @media (max-width: 1000px) {
  
                @media (max-width: 895px) {
                    .Left  {
                     width: 100%!important;
                     padding: 1rem!important;
                     margin-bottom: 5rem!important;
                    }
                    .Right  {
                     width: 100%!important;
                     padding: 1rem!important;
                    }
                
                   }

         `}
            </style>

        </>
    );
};

export default WhoUs;