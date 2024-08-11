"use client";

import { SiWireshark,SiAssemblyscript } from "react-icons/si";
import {ScrollArea} from '@/components/ui/scroll-area'

const frontend={
    title: 'Other Softwares and Technologies',
    description: 'Apart from the web development technologies, I also needed to learn some other stuffs in order to complete my projects and assignments. Here are some of them.',

};


const technologies=[
    {
        name: 'WireShark',
        description: "Did needed to learn about WireShark in order to complete the Computer Networks assignment.",
        icon: <SiWireshark/>,
    },
    {
        name: 'Assembly Language',
        description: "Needed to learn about the assembly language for the Microprocessor and the Compiler courses",
        icon: <SiAssemblyscript/>,
    },
    {
        name: 'Design tools',
        description: "Learned about the complex circuit design tools like \'Logisim\' for designing the \'ALU\' and various \'Digital Systems\'" ,
        icon: <br/>,
    },
    {
        name: 'NS3',
        description: "A network Simulator used to create virtual networks and simulate various networking scenerios to analyze their performances and behaviours. Learned about this in the \'Computer Networks\' sessional course.",
        icon: <br/>,
    }
];


const BackEnd=()=>{
    return (
        <div className='flex flex-col text-center gap-[30] xl:text-left'>
            <h1 className='text-4xl font-bold'>
                {frontend.title} 
            </h1>
            <p className='py-4 mx-w-[600px] text-white/60 mx-auto xl:mx-0 '>
                {frontend.description}
            </p>
            {/* list of languages */}
            <ScrollArea className='h-[500px] py-8'>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-[50px]'>
                    {technologies.map((tec,index)=>{
                        return(
                            <li key={index}
                            className='bg-[#232329] h-[400px] px-4 py-6 rounded-lg flex flex-col items-center justify-center group'> 
                            <span className='flex text-6xl items-center justify-center'>
                                {tec.icon}
                            </span>
                            <h3 className='mt-3 text-3xl text-secondary'>
                                {tec.name}
                            </h3>
                            <p className='mt-5 text-white/60'>
                                {tec.description}
                            </p>
                            </li>
                        )
                    })}
                </ul>

            </ScrollArea>
        </div>
    );

};
export default BackEnd;