
import img4 from "../../assets/images/img4.png";


const ProjectComponent = () => {

    const projects = [
        { name: "Canberra Hospital expansion", num: "01" },
        { name: "Redland Hospital ", num: "02" },
        { name: "Caboolture Hospital", num: "03" },
        { name: "Townsville Hospital Expansion", num: "04" },
        { name: "Wonthaggi Hospital", num: "05" },
        { name: "Mater Springfield", num: "06" },
        { name: "Logan Hospital project", num: "07" },
        { name: "Enga Hospital", num: "08" },
        { name: "West Al Dammam General Hospital (500 beds)", num: "09" },
        { name: "Holy Capital Physiatric Hospital (500 beds) ", num: 10 },
        { name: "Al Riyadh Medical City Hospital (1000beds)", num: 11 },
        { name: "Qunfoda General Hospital (500 beds)", num: 12 },
        { name: "Al Yamama Gynecology and Obstetrics Hospital (500 beds)", num: 13 },


    ]

    return (

        <>
            {/* Project List Section */}
            <div className="List flex flex-wrap justify-between mt-8 p-[80px] bg-[#F9F9F9] rounded-tr-[300px] rounded-br-[300px]	rounded-bl-[44px] rounded-tl-[44px]">
                {/* Left Part */}
                <div className="Left w-1/2 pr-4">
                    <ul>
                        {projects.map((project, index) => (
                            <li key={index} className="mb-4 flex items-center">
                                <span className="mr-4 text-[22px] font-semibold text-[#DFDFDF]">{project.num}</span>
                                <span className="text-[18px] font-semibold text-[#212326]">{project.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Part */}
                <div className="Right right w-1/2">
                    <img
                        src={img4}
                        alt="right img"
                        className="rounded-2xl w-full mt-10"
                        style={{ borderRadius: '30px' }}
                    />
                </div>
            </div>


            <style>
                {`
                   @media (max-width: 650px) {
                    .List  {
                     padding: 0px!important;
                     border: none!important;
                     border-top-right-radius: 44px;
                     border-bottom-right-radius: 44px;
                    }

                    .right{
                        padding-bottom: 1.5rem;
                    }
                     }

             `}
            </style>




        </>


    );
};

export default ProjectComponent;