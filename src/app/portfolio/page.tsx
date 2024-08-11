import Photo from "@/components/photo";
import { Button } from "@/components/ui/button";
import { FileDownIcon  } from "lucide-react";
export default function Home(){
    return(
        <section className="h-full">
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row items-center justify-between xl:pb-24 xl:pt-8'>
                    {/** text section */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                       <span className='text-xl'>Undergraduate Student</span>
                       <h1 className='h1'>
                        Hello I am <br/> <span className='text-secondary'>Tanveer Rahman</span>
                        </h1> 
                        <p className='py-5'>
                            I am a student of Computer Science and Technology at Bangladesh University of Engineering and Technology(BUET). 
                            I am a passionate learner. I am proficient in various programming languages and technologies. 
                        </p>

                        {/** download cv */}
                        <div>
                            <Button variant='outline' size="lg" className='uppercase items-center gap-2'>
                                <span>Download CV </span>
                                <FileDownIcon/>
                            </Button>
                        </div> 
                    </div>

                    {/** photo section */}
                    <div className='py-3 order-1 xl:order-none mb-8 xl:mb-0 '>
                        <Photo/>
                    </div>

                </div>
            </div>
        </section>
    );
}