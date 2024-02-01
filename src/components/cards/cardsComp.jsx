import Cards from "./cards";

const CardsComp = () => {


    return (
        <>
            <div className="Cards text-center mx-36 mb-16 flex-wrap">
                <h1 className="text-[28px] font-bold mb-8">We Provide Professional Services</h1>

                <Cards />


            </div>




            <style>
                {`
                  @media (max-width: 1445px) {
                       .Cards {
                        margin-left: 15rem!important;
                         margin-right: 15rem!important;
            
                       }
                       .Card {
                        margin-bottom: 2rem;
    
                     }
                  }

               @media (max-width: 1255px) {
                        .Cards {
                         margin-left: 10rem!important;
                          margin-right: 10rem!important;
             
                     }
                }
                
                @media (max-width: 1105px) {
                    .Cards {
                     margin-left: 5rem!important;
                     margin-right: 5rem!important;
                 }
                 .Card {
                    margin-bottom: 2rem;

                 }
                }
                
                @media (max-width: 940px) {
                    .Cards {
                     margin-left: 2rem!important;
                     margin-right: 2rem!important;
                 }
                 .fgroub {
                    margin-bottom: 0rem;
                 }
                 
                }

                @media (max-width: 450px) {
                   .Card {
                        width: 10rem!important;
                     
                    }
                    .Cards {
                        margin-left: 0rem!important;
                        margin-right: 0rem!important;
                        margin-bottom: 0rem!important;
                    }
                    .fgroub, .sgroub {
                        padding-left: 0rem!important;
                        padding-right: 0rem!important;
                        padding-bottom: 0rem!important;
                    }
                    .sgroub {
                        padding-top: 0rem!important;
                    }
                }   
                


                 @media (max-width: 384px) {
                    .Card {
                        // width: 15rem!important;   
                    }
                }
                    















        `}
            </style>







        </>
    );
};

export default CardsComp;




