
import img5 from "../../assets/images/syllabus.png";
import Vector1 from "../../assets/images/Vector.png";
import Vector2 from "../../assets/images/Vector (1).png";

const Contact = () => {

    return (
        <>

            <div className="relative text-center">
                <img src={img5} alt="Your Image" className="w-full h-auto" />

                {/* Text on Image */}
                <div className="Text1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%] sm:-translate-y-[160%] md:-translate-y-[100%] lg:-translate-y-[80%] xl:-translate-y-[120%] text-white text-5xl font-bold">
                    Need help?
                </div>

                <p className="Text2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-5%] sm:-translate-y-[-5%] md:-translate-y-[-5%] lg:-translate-y-[-5%] xl:-translate-y-[-5%] text-white text-lg">
                    We're glad to help and answer any questions you might have.
                    Leave us a message below, and we'll get back to you as soon as possible!
                </p>
            </div>

            <div className="Send pl-[169px] pt-[70px]">
                {/* Our Projects Section */}
                <div className="text-start ">
                    <div className="pr-4">
                        <h1 className="text-3xl font-bold mb-4 ml-0">Send us a message</h1>
                    </div>
                </div>
            </div>


            <div className="Business Form px-[169px] pb-[100px] flex justify-between ">
                {/* Left side - Form */}
                <div className="Left w-1/2 pt-20 px-20 pb-10 bg-white shadow-xl mr-6 ">
                    <form >
                        <div className="mb-6">
                            <label htmlFor="firstName" className="block text-sm text-[#8D8D8D]">First Name:</label>
                            <input type="text" id="firstName" name="firstName" className="w-full p-2 border border-slate-400 " />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="Email" className="block text-sm text-[#8D8D8D]">Email:</label>
                            <input type="text" id="Email" name="Email" className="w-full p-2 border border-slate-400 " />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Phone" className="block text-sm text-[#8D8D8D]">Phone:</label>
                            <input type="text" id="Phone" name="Phone" className="w-full p-2 border border-slate-400" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Company" className="block text-sm text-[#8D8D8D]">Company:</label>
                            <input type="text" id="Company" name="Company" className="w-full p-2 border border-slate-400" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Requested Service" className="block text-sm text-[#8D8D8D]">Requested Service:</label>
                            <input type="text" id="Requested Service" name="Requested Service" className="w-full p-2 border border-slate-400" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="comment" className="block text-sm text-[#8D8D8D]">Comment or Message:</label>
                            <textarea id="comment" name="comment" rows="4" className="w-full p-2 border border-slate-400"></textarea>
                        </div>
                        <div className="w-full text-center">
                            <button type="submit" className="submit m-auto bg-[#1D2F71] text-white py-2 px-4 rounded">Send Message</button>
                        </div>
                    </form>
                </div>

                {/* Right side - Contact Buttons */}
                <div className="Right w-1/2 p-8 bg-white flex flex-col items-center justify-center ">
                    <div className="mb-8 ">
                        {/* Call Us Button */}
                        <button className="Call w-[490px] text-start flex items-center border-2 text-[#797979] py-2 px-4 rounded-full">
                            <img src={Vector1} alt="Call Icon" className="Contact w-[89px] h-[89px] mr-4 p-4 rounded-full"
                                style={{ background: 'linear-gradient(101.44deg, #FFE3B8 -0.73%, #FFDBC7 42.05%, #FFA3C7 89.15%)' }} />
                            <div>
                                <p className="text-sm font-semibold text-black">Call Us</p>
                                <p className="text-lg">+61 481 95 11 96</p>
                            </div>
                        </button>
                    </div>

                    <div>
                        {/* Write Us Button */}
                        <button className="Write w-[490px] text-start flex items-center border-2  text-[#797979] py-2 px-4 rounded-full">
                            <img src={Vector2} alt="Write Icon" className="Contact w-[89px] h-[89px] mr-4 p-4 rounded-full"
                                style={{ background: 'linear-gradient(101.44deg, #B8C7FF -0.73%, #BAD6FF 42.05%, #99E8F8 89.15%)' }} />
                            <div>
                                <p className="text-sm font-semibold  text-black">Write Us</p>
                                <p className="text-lg text-wrap">Inf@corneredge.com</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>


            <style>
                {`
  
          
            @media (max-width: 955px) {
                .Business{
                    padding-right: 100px!important;
                    padding-left: 100px!important;
                }
                .Send{
                    padding-left: 100px!important;
                }
               
               }
               @media (max-width: 515px) {
                .Business{
                    padding-right: 2rem!important;
                    padding-left: 2rem!important;
                }
                .Send{
                    padding-left: 2rem!important;
                }
               .values{
                padding-left: 2rem!important;
               }
               .Left {
                box-shadow:none!important;
               }
               .submit {
                width: 100%!important;
                padding-top: 1rem!important;
                padding-bottom: 1rem!important;
                padding-right: 2rem!important;
                padding-left: 2rem!important;
               }
               .Contact {
                display:none!important;
               }
               .Right {
                align-items: normal;
                padding: 1rem;

               }

               }

               @media (max-width: 1228px) {
                .Left  {
                 width: 100%!important;
                 padding:0rem!important;
                 padding-bottom: 5rem!important;
                  margin-right: 0rem; 

                }
                .Right , .Call , .Write {
                 width: 100%!important;
                 
                }
                 .Form {
                        flex-wrap: wrap;
                }
               } 
                     @media (max-width: 1212px) {
                 .Text1 {
                           font-size: 2rem;
                }
                 .Text2 {
                           font-size: 1rem;
                }
               } 
                         @media (max-width: 640px) {
                  .Text1 {
                           font-size: 1rem;
                            --tw-translate-y: -150%;
                }
                 .Text2 {
                           font-size: .3rem;
                            --tw-translate-y: -12%;
                                line-height: .5rem;

                }
     }
}
              

               
         `}
            </style>
        </>
    );
};

export default Contact;