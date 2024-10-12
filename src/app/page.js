import CallToActions from "@/components/Test1/CallToActions";
import Features from "@/components/Test1/Features";
import Hero from "@/components/Test1/Hero";
import Testimonials from "@/components/Test1/Testtimonials";
// import Hero from "@/components/Test2/Hero";
// import Features from "@/components/Test2/Features";
// import CallToActions from "@/components/Test2/CallToActions";
// import Testimonials from "@/components/Test2/Testimonials";


export default function Home() {
  return (
    <div className="min-h-screen">
    <Hero/>
    <Features/>
    <Testimonials/>
    <CallToActions/>
    </div>
  );
}
