import { FaShippingFast } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Fast & Reliable Logistics with <span className="text-yellow-300">Dropikk</span>
        </h1>
        <p className="text-xl mb-8">
          Empowering your business with seamless delivery solutions.
        </p>
        <button className="bg-yellow-300 text-blue-800 font-semibold px-8 py-3 rounded-full hover:bg-yellow-400">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
