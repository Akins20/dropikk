import Image from "next/image";
import UserImg from "@/assets/user-img.png";

const Hero = () => {
  return (
    <section className="bg-blue-50 p-8 text-center">
      <h1 className="text-5xl font-bold text-blue-700">
        Fast and Reliable Logistics with Dropikk
      </h1>
      <p className="text-xl mt-4 text-gray-700">
        Deliver your goods anywhere with our world-class services.
      </p>
      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
        Get Started
      </button>
      <div className="mt-10">
        <Image
          src="/hero-image.png"
          layout="fill"
          alt="Delivery Image"
          className="w-full max-w-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
