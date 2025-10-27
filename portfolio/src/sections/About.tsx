import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWorks } from '../components/FrameWorks'
import FallingText from '../components/FallingText'
import Particles from '../components/ParticleBackground'
import ElectricBorder from "../components/EletricBorder";
import ProfileCard from '../components/ProfileCard'
import {   TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "../components/TextRevealCard";


const About = () => {

    const grid2Container = useRef<HTMLDivElement | null>(null);
    return (
        <>
            <div className="w-full h-screen relative flex justify-center items-center">
                <div style={{ width: '100%', height: '500%', position: 'relative' }}>
                    <Particles
                        particleColors={['#ffffff', '#d7baffff']}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div >
                <div className="absolute flex flex-col justify-center items-center container mx-auto max-w-7xl mt-60">
                    <section className="c-space section-spacing">
                        <h2 className="text-heading">About Me</h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-10 md:auto-rows-[18rem] mt-12">


                            {/* Grid 1 */}
                            <ElectricBorder
                                color="#7df9ff"
                                speed={1}
                                chaos={0.5}
                                thickness={2}
                                style={{ borderRadius: 16 }}
                                className="grid-default-color md:col-span-4 md:row-span-2 md:start-row-1 md:co-start-1">
                                <div>
                                    <div className="">
                                        <ProfileCard
                                            name="Brodie Rogers"
                                            title="Software Engineer"
                                            handle="broge33"
                                            status="Online"
                                            contactText="Contact Me"
                                            avatarUrl="/assets/Brod+Kate.JPG"
                                            iconUrl='/assets/coding.svg'
                                            showUserInfo={true}
                                            enableTilt={true}
                                            enableMobileTilt={true}
                                            onContactClick={() => console.log('Contact clicked')}
                                        />
                                    </div>
                                </div>
                            </ElectricBorder>
                            {/* Grid 2 */}
                            <div className="grid-black-color overflow-hidden md:col-span-3 md:row-span-1 md:col-start-5">
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

                            {/* Grid 3 */}

                            <div className="relative grid-default-color overflow-hidden md:col-span-4 md:row-span-2 md:col-start-7 md:row-start-2">
                                <img className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" src='assets/coding-pov.png'></img>
                                <div className="absolute bottom-0 left-0 p-4 z-10">
                                    <p className="headtext">Hi, I'm Brodie Rogers</p>
                                    <p className="subtext">
                                        Over the last 3 years, I have fine tuned my frontend and backend skills to
                                        deliver software and web applications.
                                    </p>
                                </div>
                            </div>

                            {/* Grid 4 */}

                            <div className="grid-default-color overflow-hidden md:col-span-3 md:row-span-1 md:col-start-8 md:row-start-1">
                                <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                                    <p className="flex items-end text-5xl text-gray-500">
                                    </p>
                                    <FallingText
                                        text={"Architect Robust Modern Tested Scalable Logical Efficient Collaborative Creative Driven Detailed Fast Focused Agile Meticulous Innovative Reliable Clean Consistent"}
                                        highlightWords={['Architect', 'Robust', 'Scalable', 'Efficient', 'Creative', 'Meticulous', 'Innovative', 'Clean']}
                                        highlightClass="highlighted"
                                        trigger="scroll"
                                        backgroundColor="transparent"
                                        wireframes={false}
                                        gravity={0.0}
                                        fontSize="1rem"
                                        mouseConstraintStiffness={0.9}
                                    />

                                </div>
                            </div>

                            {/* Grid 5 */}

                            <div className="grid-black-color md:col-span-3 md:row-span-1 md:col-start-1 md:row-start-3">
                                <div className="flex flex-col items-center justify-center gap-4 size-full">
                                    <p className="text-center headtext">
                                        Do you want to start a project together?
                                    </p>
                                    <CopyEmailButton />
                                </div>
                            </div>
                            {/* Grid 6 */}

                            <div className="overflow-hidden grid-default-color md:col-span-5">
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

                            {/* Grid 7 */}
                            <div className="overflow-hidden md:col-span-5 md:row-span-1 md:col-start-6 md:row-start-4">
                            <TextRevealCard
                                text="You know the business"
                                revealText="I know the methods"
                            >
                                <TextRevealCardTitle>
                                Sometimes, you just need to see it.
                                </TextRevealCardTitle>
                                <TextRevealCardDescription>
                                This is a text reveal card. Hover over the card to reveal the hidden
                                text.
                                </TextRevealCardDescription>
                            </TextRevealCard>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About