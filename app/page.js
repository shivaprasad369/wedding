import Image from "next/image";
import Navbar from '../components/Navbar'
import Home from '../components/Home.jsx'
import About from "@/components/About";
import Services from "@/components/Services";
import Specialization from "@/components/Specialization";
import Client from "@/components/Client";
import Gallary from "@/components/Gallary";
import Footer from "@/components/Footer";
export default function HomePage() {

  return (
   <>
   <div className={`bg-[url("../assets/slide1.jpeg")] bg-no-repeat bg-cover`}>
    <Navbar/>
    <Home/>

   </div>
   <div>
    <About/>
   </div>
   <Services/>
   <Specialization/>
   <Client/>
   <Gallary/>
   <Footer/>
   </>
  );
}
