import img3 from "../../assets/images/img3.jpg";


const About = () => {


    return (

        <>
            {/* <div className="flex justify-between flex-wrap">
                {/* Left Half
                <div className="Left w-1/2 bg-[#37393F] text-white py-20 pr-20 pl-40">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold mb-4">Our Vision:</h1>
                        <p className="text-lg">Our vision is to establish ourselves as a prominent consultancy firm, serving clients both nationally and internationally. We strive to provide a comprehensive array of engineering and business services that cater to the diverse needs of our clients.</p>
                    </div>
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold mb-4">Our Mission:</h1>
                        <p className="text-lg">Deliver integrated business and engineering advisory services to our clients enabling them to achieve their goals and fulfill their needs.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Our Values:</h1>
                        <p className="text-lg">Our values guide our actions and decisions as we strive to achieve our mission of delivering top-notch engineering and business services to our clients.</p>
                    </div>
                </div>

                {/* Right Half 
                <div className="Rightabout w-1/2">
                    <img src={img3} alt="right Half Image" className="w-full h-auto" />
                </div>
            </div> */}

            <div className="flex justify-between flex-wrap">
                {/* Left Half */}
                <div className="Left w-1/2 bg-[#37393F] text-white py-20 pr-20 pl-40">
                    <div className="mb-8">
                        <h1 className="text-[22px] font-bold mb-4">Our Vision:</h1>
                        <p className="text-[16px]">Our vision is to establish ourselves as a prominent consultancy firm, serving clients both nationally and internationally. We strive to provide a comprehensive array of engineering and business services that cater to the diverse needs of our clients.</p>
                    </div>
                    <div className="mb-8">
                        <h1 className="text-[22px] font-bold mb-4">Our Mission:</h1>
                        <p className="text-[16px]">Deliver integrated business and engineering advisory services to our clients enabling them to achieve their goals and fulfill their needs.</p>
                    </div>
                    <div>
                        <h1 className="text-[22px] font-bold mb-4">Our Values:</h1>
                        <p className="text-[16px]">Our values guide our actions and decisions as we strive to achieve our mission of delivering top-notch engineering and business services to our clients.</p>
                    </div>
                </div>

                {/* Right Half */}
                <div className="Rightabout w-1/2 flex justify-center items-center">
                    <img src={img3} alt="right Half Image" className="max-h-full h-[-webkit-fill-available]" />
                </div>
            </div>






            <style>
                {`
                    

          @media (max-width: 895px) {
           
               .Rightabout  {
                width: 100%!important;
                padding:0!important;
               }

           `}
            </style>


        </>


    );
};

export default About;