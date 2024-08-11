"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
const Nav = () =>{
    
    const pathname = usePathname();
    console.log(pathname);
    return(
        <nav className="flex gap-8">
            {links.map((link, index)=>{
                return <Link href={link.path} key={index} className={`${link.path == pathname &&
                    "text-secondary border-b-2 border-secondary"}
                    capitalize font-medium hover:text-secondary-hover transition-all`}>
                        {link.name}
                </Link>

            })}
        </nav>
    );

}
export default Nav;
