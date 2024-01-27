import React, { useState } from 'react';
import light from "../../../assets/images/light.svg";
import dark from "../../../assets/images/dark.svg";
import upicon from "../../../assets/images/upicon.png";


const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };


    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Dropdown button */}
            <button
                className={`Dropdownbutton py-4 px-6 text-white font-semibold w-[28rem] mb-2 bg-[#1D2F71] justify-between flex rounded-lg focus:outline-none`}
                onClick={handleToggle}
            >

                {title}  <img src={upicon} className="mr-2 mt-2" />
            </button>

            {/* Dropdown items */}
            {isOpen && (
                <div className={`Dropdownbutton static w-[28rem] border-2 border-[#D6D6D6]  top-10 right-0 bg-white py-4 px-4 rounded-lg `}>
                    {items.map((item, index) => (
                        <div key={index} className="cursor-pointer mb-5 flex text-[#6B6B6B] font-semibold" onClick={() => handleItemClick(item)}>
                            {selectedItem === item ? (
                                <img src={dark} alt={item} className="mr-2" />
                            ) : (
                                <img src={light} alt={item} className="mr-2" />
                            )}
                            {item}
                        </div>
                    ))}
                </div>
            )}



            <style>
                {`
                    
@media (max-width: 505px) {
            
            .Dropdownbutton {
            width: 100%!important;
            }
        }
            `}
            </style>






        </div>
    );
};

export default Dropdown;
