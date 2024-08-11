"use client";
import Link from "next/link";
import {motion} from "framer-motion";
import {BsArrowDownRight} from 'react-icons/bs';


const degrees=[
    {
        name: "SSC",
        year: "2017",
        institution: "Mirzapur Cadet College",
        result: "GPA-5.00",
        link:"https://mcc.army.mil.bd",
    },
    {
        name: "HSC",
        year: "2019",
        institution: "Mirzapur Cadet College",
        result: "GPA-5.00",
        link:"https://mcc.army.mil.bd",
    },
    // {
    //     name: "BSc in CSE",
    //     year: "2019-Today",
    //     institution: "Bangladesh University of Engineering and Technology(BUET)",
    //     result: "N/A",
    //     link:"https://www.buet.ac.bd",
    // }
];

const Education = () =>{
    return(
        // min-h-[80vh] is used to make the section at least 80% of the viewport height
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className='container mx-auto'> 
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1, 
                    transition:{delay:1.5, duration:.5, ease:'easeIn'}
                }} 
                className='grid grid-col-1 md:grid-cols-2 gap-[60px]'
                > 
                {degrees.map((degree,index)=>{
                    return(
                        <div key={index}
                            className='flex-1 flex flex-col justify-center gap-6 group'
                            >
                            {/* degree name and link */}

                            <h1 className='text-5xl font-extrabold text-outline text-transparent group-hover:text-secondary-hover transition-all duration-500'>
                                {degree.name}
                            </h1>

                            <p className='text-lg font-light group-hover:text-secondary-hover transition-all duration-500'>
                                {degree.year}
                            </p>

                            <div className='w-full flex text-[18px] justify-between items-center transition-all duration-500 group-hover:text-secondary-hover'>
                                
                                {degree.institution}
                                
                                <Link href={degree.link}
                                      className='w-[40px] h-[40px] rounded-full py-2 bg-white text-primary 
                                      hover:-rotate-45 hover:bg-primary group-hover:text-secondary-hover flex justify-center items-center'>
                                    <BsArrowDownRight className='text-3xl'/>
                                </Link>
                            </div>
                                <p className='text-2xl group-hover:text-secondary-hover'>
                                    Result: {degree.result}
                                </p>
                                
                                {/* border */}
                                <div className='border border-white/60 w-full'></div>
                            
                        </div>
                    )
                })}
                </motion.div>

                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1,
                    transition:{delay:1.5, duration:0.5, ease:'easeIn'}
                }}
                className='flex justify-center mt-16'
                >
                    <div className=' xl:flex flex-col justify-center xl:text-center xl:items-center group'>
                        <h1 className='text-5xl font-extrabold text-outline text-transparent group-hover:text-secondary-hover transition-all duration-500'>
                            BSc in CSE
                        </h1>
                        
                        <p className='text-lg font-light group-hover:text-secondary-hover transition-all duration-500 pt-6'>
                            2019-Today
                        </p>
                        
                        <div className='w-full flex text-[18px] justify-between items-center transition-all duration-500 group-hover:text-secondary-hover gap-4 pt-6'>     
                            Bangladesh University of Engineering and Technology(BUET)    
                            
                            <Link href={"https://www.buet.ac.bd"}
                                    className='w-[40px] h-[40px] rounded-full py-2 bg-white text-primary 
                                    hover:-rotate-45 hover:bg-primary group-hover:text-secondary-hover flex justify-center items-center'>
                                <BsArrowDownRight className='text-3xl'/>
                            </Link>
                        </div>
                        <p className='text-2xl group-hover:text-secondary-hover pt-6'>
                            Result: Final Result not Published
                        </p>
                                
                        {/* border */}
                        <div className='mt-6 border border-white/60 w-full'></div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
export default Education;