/* eslint-disable react/prop-types */
import { useState } from "react";
import HeadAbout from "./components/header";
import WhoUs from "./components/whous";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";


const ValuesTab = ({ title, image, content, active, onClick }) => (
    <div
        className={`ValuesTab cursor-pointer flex items-center w-fit justify-between mb-4 mx-14 ${active ? 'text-[#1D2F71]' : 'text-[#666666]'
            } border-b-2 ${active ? 'border-[#40DDB6]' : 'border-transparent'}`}
        onClick={() => onClick(title, image, content)}
    >
        <div>
            <h2 className="text-[16px] font-bold">{title}</h2>
        </div>
    </div>
);


const AboutUs = () => {

    const tabs = [
        {
            title: 'Integrity',
            image: img6,
            content:
                'Committed to understanding our clients’ needs and delivering exceptional solutions. Our accountability and recognition that our success is tied to our clients’ success drives us to provide the best possible services and solution.',
        },
        {
            title: 'Client Centered',
            image: img7,
            content:
                'Committed to understanding our clients’ needs and delivering exceptional solutions. Our accountability and recognition that our success is tied to our clients’ success drives us to provide the best possible services and solution',
        },
        {
            title: 'Reliability',
            image: img8,
            content:
                'Reliability is paramount in our industry, and we strive for consistency in quality and behavior to meet our clients’ expectations. We continuously evolve and improve our services by investing in our team’s development and adopting new technologies and methodologies to stay ahead of the curve.',
        },
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].title);
    const [selectedItem, setSelectedItem] = useState(tabs[0]);


    const handleTabClick = (title, image, content) => {
        setActiveTab(title);
        setSelectedItem({ title, image, content });
    };


    return (
        <>
            <HeadAbout />

            <WhoUs />



            <div>
                <h1 className="text-[34px] font-bold my-20 text-center">Our Values</h1>
                <div className="Values flex-wrap flex w-fit justify-between m-auto">

                    {tabs.map((tab) => (
                        <ValuesTab
                            key={tab.title}
                            title={tab.title}
                            image={tab.image}
                            content={tab.content}
                            active={activeTab === tab.title}
                            onClick={handleTabClick}

                        />

                    ))}
                </div>
                {selectedItem && (

                    <div className="flex-wrap flex justify-between my-20">
                        {/* Left Half  */}

                        <div className="Left w-1/2">
                            <img src={selectedItem.image} alt={selectedItem.title} className="max-h-full h-[-webkit-fill-available]" />
                        </div>
                        {/* Right Half  */}
                        <div className="Right w-1/2 text-[#37393F] bg-[#F9F9F9] p-20 text-center">

                            <div className="mb-8">
                                <h1 className="text-[22px] w-fit justify-center m-auto font-bold  text-[#1D2F71] border-b-2 border-[#40DDB6]">{selectedItem.title}</h1>
                                <p className="text-[16px] mt-20">{selectedItem.content}</p>
                            </div>

                        </div>
                    </div>

                )}



                <style>
                    {`
           
                @media (max-width: 895px) {
                    .Left  {
                     width: 100%!important;
                   
                    }
                    .Right  {
                     width: 100%!important;
             
                    }
                    .Values{
                        justify-content: center;
                    }
                   }
                   @media (max-width: 450px) {
                    .ValuesTab  {
                        margin-left: .5rem!important;
                        margin-right: .5rem!important;
                   
                    }
                   
                   }




                   

         `}
                </style>



            </div>

        </>
    );
};

export default AboutUs;
