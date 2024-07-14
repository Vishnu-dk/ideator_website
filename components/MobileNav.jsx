'use client'

import { Sheet,SheetContent,SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"

const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/About" },
    { name: "PROJECTS", path: "/Projects" },
    { name: "EVENTS", path: "/Events" },
    { name: "TEAM", path: "/Team" },
    { name: "CONTACT", path: "/Contact" },
  ];

const MobileNav = () => {
    const pathaname = usePathname()
  return (
    <Sheet>
        <SheetTrigger>
            <CiMenuFries className="text-[28px] my-auto text-primary"/>
        </SheetTrigger>
    </Sheet>
  )
}

export default MobileNav