import Search from "../../assets/images/Search.png";
import Boxgreen from "../../assets/images/Boxgreen.png";
import Photo1 from "../../assets/images/Photo.png";
import user from "../../assets/images/user.png";
import left from "../../assets/images/left.png";
import ticket from "../../assets/images/ticket.png";
import Photo2 from "../../assets/images/Photo (1).png";
import Photo3 from "../../assets/images/Photo (2).png";
import Photo4 from "../../assets/images/Photo (3).png";
import CardGroup from "./cardGroup";
const Blog = () => {

    return (
        <>

            <div className="text-center items-center mt-4 mb-28">
                <h1 className="text-6xl font-bold mb-4">Latest News</h1>
                <p className="text-[#797979] text-[16px] mb-8">We Keep You Updated</p>
                {/* <div className="flex items-center bg-[#F5F5F5] h-14 w-[592px] m-auto rounded-full">
                    <input
                        type="text"
                        placeholder="Search Blog"
                        className="font-bold w-full h-full pl-10 outline-none bg-[#F5F5F5] rounded-full"
                    />
                    <img
                        src={Search}
                        alt="Search Icon"
                        className="h-6 w-6 mx-4 cursor-pointer"
                    />
                </div> */}
                <div className="flex items-center bg-[#F5F5F5] h-14 w-full max-w-[592px] m-auto rounded-full">
                    <input
                        type="text"
                        placeholder="Search Blog"
                        className="font-bold w-full h-full pl-10 outline-none bg-[#F5F5F5] rounded-full"
                    />
                    <img
                        src={Search}
                        alt="Search Icon"
                        className="h-6 w-6 mx-4 cursor-pointer"
                    />
                </div>

            </div >

            <div className="Newsheader text-center mx-80 mb-20 mt-20">
                <p className="text-[22px] font-samibold mb-2 flex items-center justify-center">
                    <span>
                        <img src={Boxgreen} style={{ height: "fit-content", marginRight: "10px" }} />
                    </span>
                    Our Recent News
                </p>
                <h1 className="text-[34px] font-bold mb-4 ">Featured News And Insights</h1>
            </div>

            <div className="flex items-center m-auto justify-center flex-wrap">
                {/* First image and buttons */}

                <CardGroup bigImg={Photo1} header="A Business Consulting That Can Produce"
                    contant="Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking." />
                {/* Second image and buttons */}
                <CardGroup bigImg={Photo2} header="Popular Digital Business analysis That in 2024"
                    contant="Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking." />

                {/* third image and buttons */}
                <CardGroup bigImg={Photo3} header="What are Medical Equipment and Why They are Important"
                    contant="Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking." />

                {/* fourth image and buttons */}
                <CardGroup bigImg={Photo4} header="Importance of Biomedical Equipment management"
                    contant="Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking." />

            </div>

            <div className="border border-[#F4F4F4] overflow-hidden w-[140px] h-[65px] mx-auto my-20 
                    bg-[#29366E] text-white">
                <div className="flex justify-center text-center px-2 py-4 cursor-pointer">
                    <h2 className="text-[18px] font-semibold">Next</h2>
                    <img
                        src={left}
                        alt="Image 1"
                        className="ml-4 h-fit mt-2"
                    />
                </div>
            </div>




            <style>
                {`
           
                @media (max-width: 895px) {
                    .Newsheader  {
                        margin-left: 10rem;
                        margin-right: 10rem;
                   
                    }
                 }    
                  @media (max-width: 800px) {
                    .Newsheader{
                        margin-right: 5rem!important;
                        margin-left: 5rem!important;
                    }
                   }
                   @media (max-width: 477px) {
                    .Newsheader{
                        margin-right: 2rem!important;
                        margin-left: 2rem!important;
                    }
                   }
         `}
            </style>




        </>
    );
};

export default Blog;