import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 md:py-6 text-primary bg-[#c3c3c3]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
        <h1 className="text-3xl font-semibold">
            IDEATOR</h1></Link>
      <div className="hidden xl:flex">
      <Nav/>
      </div>
      <div className="xl:hidden">
        <MobileNav/>

      </div>
      </div>
    </header>
  );
};

export default Header;
