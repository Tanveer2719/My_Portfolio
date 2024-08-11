import Link from "next/link";

// componets
import Nav from "./nav";
import { Button } from "./ui/button";
import MobileNav from "./mobilenav";


const Header = () => {
    return(
        <header className="py-8 xl:py-12 text-white bg-pink-50/20">
            <div className="container mx-auto flex justify-between items-center">
                
                {/**Logo starts here */}
                <Link href="/portfolio">
                    <h1 className="font-semibold text-4xl">
                        TANVEER <span className="text-secondary">.</span>
                    </h1>
                </Link>
                {/**Logo ends here */}

                <div className="hidden xl:flex items-center gap-8">
                    {/**Navigation starts here */}
                    <Nav/>
                    {/** button for hire me */}
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                <div className="xl:hidden">
                    <MobileNav/>
                </div>

            </div>
            
        </header>
    )

};
export default Header;