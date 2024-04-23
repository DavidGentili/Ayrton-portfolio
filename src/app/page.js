import Home from "@/app/pages/Home";
import About from "@/app/pages/About";
import Contact from "@/app/pages/Contact";
import Gallery from "./pages/Gallery";




export default function Page() {
  return (
    <main className="m-12">
      <Home/>
      <About/>
      <Gallery/>
      <Contact/>
     
    </main>
  );
}
