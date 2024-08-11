"use client";

import Image from "next/image";
import {motion} from "framer-motion"

const Photo =() =>{
    return (
        
        <div className='w-full h-full relative order-2'>
            <motion.div 
                initial={{opacity:0}}
                animate={{
                    opacity:1,
                    transition:{delay:1, duration:.4, ease:"easeInOut"}

                }}
                >
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
                    <Image 
                    src="/profile_pic/profile.png" 
                    priority quality={100} fill
                    alt="profile-pic"
                    className="object-contain"
                    />
                </div>

            </motion.div>
        </div>
    );

}
export default Photo;
