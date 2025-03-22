import Image from "next/image";
import Hero from "./component/hero";
import About from "./component/about";
import Skills from "./component/skills";
import Project from "./component/projects";
import Contact from "./contact";
import Certification from "./component/certification";


export default function Home() {
  return (
<div>
 <Hero/>
 <About/>
 <Skills/>
 <Project/>
 <Certification />
 <Contact/>
</div>
  )
  
}