import { useReducedMotion } from "motion/react";
import Card from "../components/Card"
import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWorks } from '../components/FrameWorks'
import { BackgroundLines } from "../components/BackgroundLines";
import { PixelatedCanvas } from "../components/PixelatedCanvas";

const About = () => {

    function getRandomRotation(): number {
    const min = Math.ceil(-150);
    const max = Math.floor(150);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
    function getRandomPosition(): number {
    const min = Math.ceil(0);
    const max = Math.floor(50);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    const grid2Container = useRef<HTMLDivElement | null>(null);
  return (
    <section className="c-space section-spacing relative">
            <BackgroundLines 
                className="absolute inset-0 z-0" 
                svgOptions={{ duration: 15 }} 
            />
            <h2 className="text-heading relative z-10">About Me</h2>
            {/*
            CHANGE 1: Increase to 'md:grid-cols-7' (or 8, 9, etc., based on desired width)
            I've also removed 'md:auto-rows-[18rem]' for flexibility on the new column, 
            though you can keep it if you need fixed rows.
            */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-7 mt-12 relative z-10">
                
                {/* Grid 1: Stays the same, but now occupies 2 of 7 columns on 'md' screens */}
                <div className="flex items-end grid-default-color grid-1 md:col-span-2">
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
                {/* Grid 2: Now occupies 3 of 7 columns */}
                <div className="grid-default-color grid-2 md:col-span-3">
                    <div ref={grid2Container}  className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                            CODE IS CRAFT
                        </p>
                        <Card containerRef={grid2Container} style={{ rotate: `${getRandomRotation()}deg`, top: `${getRandomPosition()}%`,  left: `${getRandomPosition()}%`}} text="Grasp"/>
                        <Card containerRef={grid2Container} style={{ rotate: `${getRandomRotation()}deg`, top: `${getRandomPosition()}%`,  left: `${getRandomPosition()}%`}} text="SOLID"/>
                        <Card containerRef={grid2Container} style={{ rotate: `${getRandomRotation()}deg`, top: `${getRandomPosition()}%`,  right: `${getRandomPosition()}%`}} text="Design Patterns"/>
                        <Card containerRef={grid2Container} style={{ rotate: `${getRandomRotation()}deg`, top: `${getRandomPosition()}%`,  left: `${getRandomPosition()}%`}}text="Design Principles "/>
                        <Card containerRef={grid2Container} style={{ rotate: `${getRandomRotation()}deg`, top: `${getRandomPosition()}%`,  right: `${getRandomPosition()}%`}}text="SRP"/>
                        <Card containerRef={grid2Container} style={{ rotate: `${getRandomRotation()}deg`, top: `${getRandomPosition()}%`,  left: `${getRandomPosition()}%`}} image="assets/logos/csharp-pink.png"/>
                        <Card containerRef={grid2Container} style={{ rotate: `${getRandomRotation()}deg`, top: `${getRandomPosition()}%`,  right: `${getRandomPosition()}%`}} image="assets/logos/github.svg"/>
                        <Card containerRef={grid2Container} style={{ rotate: `${getRandomRotation()}deg`, top: `${getRandomPosition()}%`,  left: `${getRandomPosition()}%`}} image="assets/logos/javascript.svg"/>

                    </div>
                </div>
                {/* Grid 3: Now occupies 2 of 7 columns */}
                <div className="grid-black-color grid-3 md:col-span-2">
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
                {/* Grid 4: Now occupies 2 of 7 columns, but placed below Grid 3 in the flow */}
                <div className="grid-special-color grid-4 md:col-span-2">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            Do you want to start a project together? 
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* Grid 5: Now occupies 4 of 7 columns (changed from 3 + 3, now 2 + 3 + 2 layout) */}
                <div className="grid-default-color grid-5 md:col-span-4">
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
                
                {/* NEW COLUMN: Takes up the final 1 column and spans across 2 rows (assuming 2 rows total) */}
                <div className="grid-default-color md:col-span-1 **md:row-span-3** h-full w-full flex items-center justify-center">
                    <PixelatedCanvas></PixelatedCanvas>
                </div>

            </div>
        </section>
  )
}

export default About