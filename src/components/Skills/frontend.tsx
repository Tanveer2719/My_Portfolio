"use client";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs,SiTailwindcss} from "react-icons/si";
import {ScrollArea} from '@/components/ui/scroll-area'

const frontend={
    title: 'Frontend Technologies',
    description: 'I have learned several frontend technologies in my academic life. Here are some of them.',

};


const technologies=[
    {
        name: 'React',
        description: "I have learned a bit of React in my CSE-216. I had contributed to the database project in group",
        icon: <FaReact/>,
    },
    {
        name: 'Next.js',
        description: "I have learned about Next.js in my CSE-326 and CSE-408 courses. I also had contributed to two group projects for these courses",
        icon: <SiNextdotjs/>,
    },
    {
        name: 'Tailwind CSS',
        description: "I have learned about Tailwind CSS in my CSE-326 and CSE-408 courses. I also had contributed to two group projects for these courses. I am also looking forward to learn more of Tailwind.",
        icon: <SiTailwindcss/>,
    }
];


const FrontEnd=()=>{
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
export default FrontEnd;