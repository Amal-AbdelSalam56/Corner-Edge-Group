import img5 from "../../assets/images/img5.png";
import agile from "../../assets/images/agile.png";
import performance from "../../assets/images/performance.png";
import data from "../../assets/images/data-analysis.png";
import development from "../../assets/images/development.png";
import requirements from "../../assets/images/requirements.png";
import Boxgreen from "../../assets/images/Boxgreen.png";


const Business = () => {

    return (
        <>


            <div className="relative">
                {/* Image */}
                <img src={img5} alt="Your Image" className="w-full h-auto" />
                {/* Button */}
                <div className="absolute bottom-0 left-0 ">
                    <button className="blueDiv text-white font-semibold bg-[#30407B] py-6 pl-12 text-[20px] w-[118%] text-start">
                        Information and  <br /> Communication  <br /> Technology (ICT). <br />

                    </button>
                </div>
            </div>

            <div className="Business text-center mx-56 mb-20 mt-20 ">
                <h1 className="text-[22px] font-bold mb-8 flex items-center justify-center">
                    <span>
                        <img src={Boxgreen} style={{ height: "fit-content", marginRight: "10px" }} />
                    </span>
                    Our Services
                </h1>


                <div className="flex justify-around mb-20 flex-wrap ">
                    {/* Card 1 */}
                    <div className=" our w-[380px] pt-[95px] border-2  mb-20 border-[#EFEFEF] rounded-lg overflow-visible relative shadow"
                        style={{ boxShadow: '1px 29px 20px 0px #F8F8F8' }}>
                        <img src={agile} alt="Enterprise Architecture Analysis" className="bg-[#2FD794] w-[4.5rem] h-[4.5rem] m-auto  object-none rounded-full absolute -top-7 left-5 " />
                        {/* <img src={agile} alt="Tendering and Procurement" className="bg-[#2FD794] w-16 h-16 m-auto mt-8 object-none rounded-full" /> */}

                        <div className="p-4   text-left">
                            <p className="text-[22px] font-semibold mb-2">Enterprise Architecture Analysis</p>
                            <p className="text-[16px] text-[#797979] mb-2">We offer a business-focused strategy for Enterprise Architecture, guaranteeing that your IT investments are guided by your strategic business goals, leading to optimal ROI.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="our w-[380px] pt-[95px] border-2  mb-20 border-[#EFEFEF] rounded-lg overflow-visible relative shadow"
                        style={{ boxShadow: '1px 29px 20px 0px #F8F8F8' }}>
                        <img src={performance} alt="Requirements Management" className="bg-[#2FD794] w-[4.5rem] h-[4.5rem] m-auto object-none rounded-full absolute -top-7 left-5 " />
                        <div className="p-4   text-left">
                            <p className="text-[22px] font-semibold mb-2">Requirements Management</p>
                            <p className="text-[16px] text-[#797979]  mb-2">We provide a robust requirements management service that establishes a reliable and repeatable process, ensuring business agility, and software success.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="our w-[380px] pt-[95px] border-2  mb-20 border-[#EFEFEF] rounded-lg overflow-visible relative shadow"
                        style={{ boxShadow: '1px 29px 20px 0px #F8F8F8' }}>
                        <img src={data} alt="Mapping Value Streams and Customer Journeys" className="bg-[#2FD794] w-[4.5rem] h-[4.5rem] m-auto object-none rounded-full absolute -top-7 left-5 " />
                        <div className="p-4   text-left ">
                            <p className="text-[22px] font-semibold mb-2">Mapping Value Streams and Customer Journeys</p>
                            <p className="text-[16px] text-[#797979]  mb-2">We analyze the value streams, including people, processes, and technologies, along with understanding the customer experience, empowers informed decisions for enhancing products and services.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="our w-[380px] pt-[95px] mt-4 border-2  mb-20 border-[#EFEFEF] rounded-lg overflow-visible relative shadow"
                        style={{ boxShadow: '1px 29px 20px 0px #F8F8F8' }}>
                        <img src={development} alt="Business Process Improvement" className="bg-[#2FD794] w-[4.5rem] h-[4.5rem] m-auto object-none rounded-full absolute -top-7 left-5 " />
                        <div className="p-4   text-left">
                            <p className="text-[22px] font-semibold mb-2">Business Process Improvement</p>
                            <p className="text-[16px] text-[#797979]  mb-2">We analyze and evaluate current practices, redesigning processes, and implementing changes to achieve Process improvement.</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="our w-[380px] pt-[95px] mt-4 border-2  mb-20 border-[#EFEFEF] rounded-lg overflow-visible relative shadow"
                        style={{ boxShadow: '1px 29px 20px 0px #F8F8F8' }}>
                        <img src={requirements} alt="Digital Transformation Strategies" className="bg-[#2FD794] w-[4.5rem] h-[4.5rem] m-auto object-none rounded-full absolute -top-7 left-5 " />
                        <div className="p-4   text-left">
                            <p className="text-[22px] font-semibold mb-2">Digital Transformation Strategies</p>
                            <p className="text-[16px] text-[#797979]  mb-2">Our comprehensive suite of services is crafted to revolutionize your operations, enhance customer experiences, and drive sustainable growth in the rapidly evolving digital landscape.</p>
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
        </>
    );
};

export default Business;
