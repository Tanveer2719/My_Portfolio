"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {motion} from 'framer-motion';
import {ScrollArea} from '@/components/ui/scroll-area'

//import c, cpp, java, python, js icons from react-icons
import {SiC, SiCplusplus, SiPython, SiJavascript} from 'react-icons/si';
import { FaJava } from "react-icons/fa6";
import FrontEnd from '@/components/Skills/frontend';
import BackEnd from '@/components/Skills/backend';
import Others from '@/components/Skills/other';

const programmingLanguages={
    title: 'Programming Languages',
    description: 'I have learned several programming language in my academic life. Here are some of them.',
};



const languages=[
    {
        name:"C Programming Language",
        description: "Learned C at CSE-101(Structured Programming Lanugage) course in my first semester. Also did a project using OpenGL in C.",
        icon:<SiC/>,
    },
    {
        name: 'C++',
        description: "Learned C++ in my second semester as a part of Object Oriented Programming Language course. Did learn about OOP concepts.",
        icon:<SiCplusplus/>,
    },
    {
        name: 'Java',
        description: "Learned Java in my second semester as a part of Object Oriented Programming Language course. Did learn about java networking and other stuffs and did a project on Java networking.",
        icon:<FaJava/>,
    },
    {
        name: 'Python',
        description: "Learned Python in order to complete various assignments on Computer Security, Computer Networks, Numerical Methods etc.",
        icon:<SiPython/>,
    },
    
    {
        name: 'JavaScript',
        description: "Do not know in depth but can understand and write JavaScript code a little.",
        icon:<SiJavascript/>,
    },
    

];

const Skills = () =>{
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition: {duration:2.4, delay:0.4, ease:'easeIn'}
        }}
        className='min-h-[80vh] flex justify-center items-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                <Tabs defaultValue='pl'
                className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList 
                    className= 'flex flex-col w-full mx-w-[380px] xl:mx-w-0 gap-6'
                    >
                        <TabsTrigger value={'pl'}>Programming Language</TabsTrigger>
                        <TabsTrigger value={'fe'}>FrontEnd</TabsTrigger>
                        <TabsTrigger value={'be'}>Backend</TabsTrigger>
                        <TabsTrigger value={'ot'}>Others</TabsTrigger>
                    </TabsList>
                
                <div className='min-h-[70vh] w-full'>
                        <TabsContent value='pl' className='w-full'>
                            <div className='flex flex-col text-center gap-[30] xl:text-left'>
                                <h1 className='text-4xl font-bold'>
                                   {programmingLanguages.title} 
                                </h1>
                                <p className='py-4 mx-w-[600px] text-white/60 mx-auto xl:mx-0 '>
                                    {programmingLanguages.description}
                                </p>
                                {/* list of languages */}
                                <ScrollArea className='h-[500px] py-8'>
                                    <ul className='grid grid-cols-1 md:grid-cols-2 gap-[50px]'>
                                        {languages.map((language,index)=>{
                                            return(
                                                <li key={index}
                                                className='bg-[#232329] h-[400px] px-4 py-6 rounded-lg flex flex-col items-center justify-center group'> 
                                                <span className='flex text-6xl items-center justify-center'>
                                                    {language.icon}
                                                </span>
                                                <h3 className='mt-3 text-3xl text-secondary'>
                                                    {language.name}
                                                </h3>
                                                <p className='mt-5 text-white/60'>
                                                    {language.description}
                                                </p>
                                                </li>
                                            )
                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value='fe' className='w-full'>
                            <FrontEnd/>
                        </TabsContent>
                        <TabsContent value='be' className='w-full'>
                            <BackEnd/>
                        </TabsContent>
                        <TabsContent value='ot' className='w-full'>
                            <Others/>
                        </TabsContent>
                        
                </div>
                </Tabs>
            </div>

        </motion.div>
    )
}
export default Skills;