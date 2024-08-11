'use client';

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci" 
import { link } from "fs";

const links = [
    {
        name: "home",
        path: "/portfolio",
    },
    {
        name: "education",
        path: "/education",
    },
    {
        name: "skills",
        path: "/skills",
    },
    {
        name: "outreach",
        path: "/outreach",
    },
    {
        name: "personal",
        path: "/personal",
    },
];
const MobileNav=()=>{
    const pathname = usePathname();
    return(
        <Sheet>
            <SheetTrigger className='flex items-center justify-center'>
                <CiMenuFries className='text-[32px] text-secondary'/>
            </SheetTrigger>
            <SheetContent >
                <div className='mt-32 mb-40 flex text-center justify-center text-6xl'>
                    <Link href="/portfolio">
                    <h1 className="text-4xl font-semibold">
                        Tanveer <span className='text-secondary text'>.</span>
                    </h1>
                    </Link>
                </div>
                
                <nav className='flex flex-col items-center justify-center gap-8'>
                    {links.map((link, index)=>{
                        return <Link href={link.path} key={index}
                        className={`${link.path == pathname && "text-secondary border-b-2 border-secondary"}
                        hover:text-secondary-hover text-3xl capitalize `}
                        >
                            {link.name}
                        </Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )

}
export default MobileNav;