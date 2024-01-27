
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
                        <a href="#" className=" text-[#37393F] text-xl font-semibold border-b border-[#37393F] pb-2">Get in Touch</a>
                    </p>
                </div>

                {/* Right Half */}
                <div className="Right w-1/2 pr-4 py-36 px-14">
                    <h1 className="text-4xl font-bold mb-4">Who we are:</h1>
                    <p className="mb-4 text-[#7D7D7D] text-lg">
                        Corner Edge delivers integrated business and engineering consulting services for safe,
                        sustainable, and resilient health care facilities.
                    </p>
                    <p className=" text-[#7D7D7D] text-lg mb-16">
                        Our expertise in Biomedical Engineering and ICT, alongside our consultancy and project
                        management services, offers a complete solution for healthcare projects. Understanding the
                        industry’s unique demands, we tailor solutions for new designs or renovations, meeting precise
                        client needs.
                    </p>

                    <div className="our border border-[#E3E3E3] rounded-sm p-6  mb-8">
                        <h1 className="mb-4 flex text-2xl font-bold">
                            <img src={checkgreen} alt="Strategic Healthcare Equipment Planning" className="mb-2 mr-2" />
                            Our Vision :
                        </h1>
                        <p className="text-lg">
                            Our envision is to establish ourselves as a prominent consultancy firm, serving clients both nationally and internationally. We strive to provide a comprehensive array of engineering and business services that cater to the diverse needs of our clients.
                        </p>
                    </div>

                    <div className="our border border-[#E3E3E3] rounded-sm p-6 ">
                        <h1 className="mb-4 flex text-2xl font-bold">
                            <img src={checkgreen} alt="Strategic Healthcare Equipment Planning" className="mb-2 mr-2" />
                            Our Mision :
                        </h1>
                        <p className="text-lg">
                            Deliver integrated business and engineering advisory services to our clients enabling them to achieve their goals and fulfill their needs    </p>
                    </div>






                </div>

            </div>



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