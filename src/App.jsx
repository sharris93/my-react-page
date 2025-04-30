import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

const navItems = ['Sign In', 'Register', 'About', 'Contact']

function App() {
  return (
    <>
      <Navbar links={navItems} />
      <Hero />
      <MainContent />
      <Footer links={navItems} />
    </>
  )
}

export default App
