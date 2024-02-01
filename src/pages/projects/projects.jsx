import ProjectComponent from "../../components/ProjectComponent/ProjectComponent";
import Bg from "../../assets/images/Bg.png";



const Projects = () => {

    return (
        <>
            <div className="relative">
                {/* Image */}
                <img src={Bg} alt="Your Image" className="w-full h-auto" />
                {/* Button */}
                <div className="absolute bottom-0 left-0 ">
                    <button className="blueDiv text-white font-semibold bg-[#30407B] py-6 pl-12  text-[20px] w-[118%] text-start">
                        Our Latest<br />
                        Projects.

                    </button>
                </div>
            </div>

            <div className="Section p-[269px] pt-[169px]">
                {/* Our Projects Section */}
                <div className="addrees text-center mb-[8rem]">
                    <div className="pr-4">
                        <h1 className="text-[34px] font-bold mb-4 ml-4">Discover our latest projects</h1>
                    </div>
                </div>

                <ProjectComponent />

            </div>


            <style>
                {`
                    

          @media (max-width: 895px) {
           .Left  {
            width: 100%!important;
            
           }
           .Right  {
            width: 100%!important;
            
           }
           .Section{
            padding-right: 69px!important;
            padding-left: 69px!important;
           }
          }
       
          @media (max-width: 587px) {
            .Section{
                padding-top: 69px!important;
                padding-bottom: 69px!important;
                padding-right: 6px!important;
                padding-left: 6px!important;
            }
           }

           
           @media (max-width: 454px) {
            .addrees{
                justify-content: center;

            }
           }


          @media (max-width: 632px) {
            .Left {
             
          padding-top: 3rem!important;
          padding-bottom: 3rem!important;
             
            }
           }
           @media (max-width: 510px) {
            .Welcome {
                padding-left: 0rem!important;
                padding-right: 0rem!important;
            }
            .Left {
                padding-left: 1.5rem!important;
                padding-right: 1.5rem!important;
            }
            .Right {
                padding-left: 1.5rem!important;
                padding-right: 1.5rem!important;
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

export default Projects;