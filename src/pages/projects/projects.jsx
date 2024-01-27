import ProjectComponent from "../../components/ProjectComponent/ProjectComponent";
import Bg from "../../assets/images/Bg.png";



const Projects = () => {

    return (
        <>
            <div className="relative">
                {/* Image */}
                <img src={Bg} alt="Your Image" className="w-full h-auto" />

            </div>

            <div className="Section p-[269px] pt-[169px]">
                {/* Our Projects Section */}
                <div className="addrees text-center mb-[8rem]">
                    <div className="pr-4">
                        <h1 className="text-4xl font-bold mb-4 ml-4">Discover our latest projects</h1>
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

        `}
            </style>


        </>
    );
};

export default Projects;