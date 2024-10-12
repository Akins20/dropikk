import { FaClock, FaGlobe, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaClock size={32} className="text-blue-600" />,
    title: "Timely Delivery",
    description: "We ensure your packages arrive on time, every time.",
  },
  {
    icon: <FaGlobe size={32} className="text-blue-600" />,
    title: "Global Reach",
    description: "Delivering across the globe with a robust network.",
  },
  {
    icon: <FaShieldAlt size={32} className="text-blue-600" />,
    title: "Secure Handling",
    description: "Your goods are safe with our top-notch security protocols.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose Dropikk</h2>
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div key={index} className="w-1/3 p-4">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
