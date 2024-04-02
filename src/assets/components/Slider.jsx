import { Carousel, IconButton } from "@material-tailwind/react";

export default function Slider( props ) {
    
  return (  
                   
            <Carousel className="rounded-xl flex items-center my-10 border border-gray-700" 
            
            
                prevArrow={({ handlePrev }) => (
                    
                    <IconButton
                    color="gray"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4 opacity-20"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                      color="gray"
                      size="lg"
                      onClick={handleNext}
                      className="!absolute top-2/4 !right-4 -translate-y-2/4 opacity-20"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </IconButton>
                  )}
            > 
                {props.datas.Imgs.map((img,i)=>{
                    return(
                        <img key={i}
                             src={img}
                             className="w-full"
                        />
                    )
                })}
            </Carousel>
        );
}