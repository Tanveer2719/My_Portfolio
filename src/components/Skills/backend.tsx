"use client";

import { SiOracle } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoDjango, BiLogoPostgresql } from "react-icons/bi";
import {ScrollArea} from '@/components/ui/scroll-area'

const frontend={
    title: 'BackEnd Technologies',
    description: 'I have learned several BackEnd technologies and sql. Here are some of them.',

};


const technologies=[
    {
        name: 'Spring Boot',
        description: "I have used spring boot for CSE-216 (Database) Project.",
        icon: <BiLogoSpringBoot/>,
    },
    {
        name: 'Django',
        description: "I have used Django for managing the Backend of CSE-326 and CSE-408 project. ",
        icon: <BiLogoDjango/>,
    },
    {
        name: 'Oracle',
        description: "Learned about the oracle sql in CSE-216(Database) course. Here I have studied about various sql queries and their implementation.",
        icon: <SiOracle/>,
    },
    {
        name: 'Postgresql',
        description: "Used the Postgresql for all the projects as the Database.",
        icon: <BiLogoPostgresql/>,
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