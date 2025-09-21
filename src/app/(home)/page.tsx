import { SpotlightPreview } from "./components/SpotlightPreview";
import { AnimatedPinDemo } from "./components/AnimatedPinDemo";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
// import Header from "../(home)/components/Header"
import Border from "./components/Border";
import { SparklesPreview } from "./components/SparklesPreview";
import { AboutHeader } from "./components/AboutHeader";
import { CardAbout } from "./components/CardAbout";
import {SkillEdu} from "./components/SkillEdu"
import { SkillEducationCard } from "./components/SkillEducationCard";
import { ConnectHeader } from "./components/ConnectHeader";

import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
// import { AnimatedTooltip } from "@/components/animated-tooltip";
import Footer from "./components/Footer";
// import { ThreeDCardDemo } from "./components/ThreeDCardDemo";




export default function Home() {
  return (
  <div className="bg-black">
    <SpotlightPreview/>
    <Border/>
     <div className="flex justify-center  items-center">
     <SparklesPreview/>
    </div>
    <FloatingNavDemo/>
    <div className="flex  justify-center  items-center">
    <AnimatedPinDemo/>
    
    </div>
    
    <div className="mt-12">
    <Border/>
    </div>
    <AboutHeader/>
    
    <div >
    <CardAbout/>
    </div>
    <div className="mt-12">
    <Border/>
    </div>
    <SkillEdu/>
    <SkillEducationCard/>
    <div className="mt-12">
    <Border/>
    </div>
    <ConnectHeader/>
    {/* <TextGenerateEffectDemo/> */}
  
    {/* <AnimatedTooltip/> */}
    
    <BackgroundLinesDemo/>
    <Footer/>
    
    
    
  </div>
  );
}
