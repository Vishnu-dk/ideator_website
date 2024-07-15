'use client'
import CompletedProjects from "./CompletedProjects"
import { motion } from "framer-motion"
import { Tabs,TabsContent,TabsTrigger,TabsList } from "@/components/ui/tabs"
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@radix-ui/react-tooltip"



const Projects = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },}} className="min-h-[80vh] flex items-center justify-center md:py-12 py-6  xl:py-0">
<div className="  flex w-full ">
<div className="mx-auto text-center ">
<Tabs defaultValue="upcoming projects  mx-auto" className="gap-[10px]">
    <TabsList className="mx-auto" >
      <TabsTrigger value="upcoming projects">Upcoming Projects</TabsTrigger>
      <TabsTrigger value="completed projects">Completed Projects</TabsTrigger>
    </TabsList>

    <TabsContent className="w-full" value="upcoming projects">
      <CompletedProjects/>
    </TabsContent>
    <TabsContent className="w-full" value="completed projects">
      
    </TabsContent>
  </Tabs>
</div>
</div>
    </motion.div>
  )
}

export default Projects