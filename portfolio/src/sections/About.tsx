import { useReducedMotion } from "motion/react";
import Card from "../components/Card"
import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWorks } from '../components/FrameWorks'

const About = () => {
    const grid2Container = useRef<HTMLDivElement | null>(null);
  return (
    <section className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" src='assets/coding-pov.png'></img>
                <div className="z-10">
                    <p className="headtext">Hi, I'm Brodie Rogers</p>
                    <p className="subtext">
                        Over the last 3 years, I have fine tuned my frontend and backend skills to
                        deliver software and web applications.
                    </p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"/>
            </div>
            {/* Grid 2 */}
            <div className="grid-default-color grid-2">
                <div ref={grid2Container}  className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">
                        CODE IS CRAFT
                    </p>
                    <Card containerRef={grid2Container} style={{ rotate: "35deg", top: "5%",  left: "13%"}} text="Grasp"/>
                    <Card containerRef={grid2Container} style={{ rotate: "-20deg", bottom: "5%",  right: "30%"}} text="SOLID"/>
                    <Card containerRef={grid2Container} style={{ rotate: "160deg", bottom: "60%",  right: "0%"}} text="Design Patterns"/>
                    <Card containerRef={grid2Container} style={{ rotate: "130deg", top: "52%",  left: "10%"}}text="Design Principles "/>
                    <Card containerRef={grid2Container} style={{ rotate: "35deg", bottom: "15%",  right: "1%"}}text="SRP"/>
                    <Card containerRef={grid2Container} style={{ rotate: "35deg", top: "15%",  left: "1%"}} image="assets/logos/csharp-pink.png"/>
                    <Card containerRef={grid2Container} style={{ rotate: "35deg", bottom: "15%",  right: "1%"}} image="assets/logos/github.svg"/>
                    <Card containerRef={grid2Container} style={{ rotate: "-20deg", bottom: "50%",  left: "30%"}} image="assets/logos/javascript.svg"/>

                </div>
            </div>
            {/* Grid 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">
                        Time Zone
                    </p>
                    <p className="subtext">
                        I'm based in Nebraska, U.S.A. and open to remote work anywhere 
                    </p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe />
                </figure>
            </div>
            {/* Grid 4 */}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">
                        Do you want to start a project together? 
                    </p>
                    <CopyEmailButton />
                </div>
            </div>
            {/* Grid 5 */}
            <div className="grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Tech Stack</p>
                    <p className="subtext">I specialize in a variety of different languages, frameworks, and tools that
                        help me to build robust and scalable applications.
                    </p>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                    <FrameWorks></FrameWorks>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About