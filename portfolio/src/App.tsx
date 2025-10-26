// @ts-ignore: Navbar is a JS module without types
import  Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <About/>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
    </div>
    
  )
}

export default App