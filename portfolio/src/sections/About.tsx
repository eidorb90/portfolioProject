import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWorks } from '../components/FrameWorks'
import FallingText from '../components/FallingText'
import Particles from '../components/ParticleBackground'
import ElectricBorder from "../components/EletricBoarder";
import ProfileCard from '../components/ProfileCard'


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
        <>
            <div className="w-full h-screen relative flex justifty-center items-center">
                <div style={{ width: '100%', height: '1000%', position: 'relative' }}>
                    <Particles
                        particleColors={['#ffffff', '#d7baffff']}
                        particleCount={2000}
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
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-8 md:auto-rows-[18rem] mt-12">
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
                            </div>
                            {/* Grid 2 */}
                            <div className="grid-default-color grid-2 ">
                                <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                                    <p className="flex items-end text-5xl text-gray-500">
                                    </p>
                                    <FallingText
                                        text={"Brodie is the best"}
                                        highlightWords={['Brodie', 'best']}
                                        highlightClass="highlighted"
                                        trigger="scroll"
                                        backgroundColor="transparent"
                                        wireframes={false}
                                        gravity={0.56}
                                        fontSize="2rem"
                                        mouseConstraintStiffness={0.9}
                                    />

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
                            <div className="grid-black-color grid-4">
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
                            {/* Grid 6 */}
                            <ElectricBorder
                                color="#7df9ff"
                                speed={1}
                                chaos={0.5}
                                thickness={2}
                                style={{ borderRadius: 16 }}
                                className="grid-default-color grid-6 md:col-start-10 md:col-span-3 md:row-span-2 md:row-start-1">
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
                                            enableMobileTilt={false}
                                            onContactClick={() => console.log('Contact clicked')}
                                        />
                                    </div>

                                </div>
                            </ElectricBorder>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About