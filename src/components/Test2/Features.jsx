import { FaTruck, FaBoxOpen, FaGlobe } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description: "We deliver your goods quickly.",
    },
    {
      icon: <FaBoxOpen />,
      title: "Secure Packaging",
      description: "Your items are safe with us.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      description: "We ship worldwide at unbeatable rates.",
    },
  ];

  return (
    <section className="bg-white p-8">
      <h2 className="text-3xl font-bold text-center text-blue-700">
        Why Choose Dropikk?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-6 rounded-lg"
          >
            <div className="text-4xl text-blue-600">{feature.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
