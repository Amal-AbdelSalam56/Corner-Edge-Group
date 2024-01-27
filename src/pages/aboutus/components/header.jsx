

const HeadAbout = () => {

    return (
        <>
            <div className="HeadAbout text-center my-24 mx-80 flex-wrap">
                <h1 className="text-6xl font-bold mb-6">About Us</h1>
                <p className="text-lg mx-auto ">We assist organizations to attain success through technology by deciphering requirements, optimizing processes, and aligning technology solutions with strategic goals.</p>
            </div>

            {/* w-[45rem] */}

            <style>
                {`
            @media (max-width: 1000px) {
  
                .HeadAbout{
                    margin-right: 10rem!important;
                    margin-left: 10rem!important;
                   }
                  }
               
                  @media (max-width: 800px) {
                    .HeadAbout{
                        margin-right: 5rem!important;
                        margin-left: 5rem!important;
                    }
                   }
                   @media (max-width: 477px) {
                    .HeadAbout{
                        margin-right: 2rem!important;
                        margin-left: 2rem!important;
                    }
                   }

         `}
            </style>


        </>
    );
};

export default HeadAbout;