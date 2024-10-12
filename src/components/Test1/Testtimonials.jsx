/* eslint-disable react/no-unescaped-entities */
const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, Acme Corp",
    testimony: "Dropikk transformed our delivery system. Highly reliable!",
  },
  {
    name: "John Smith",
    role: "Operations Manager, Globex",
    testimony: "Exceptional service and support. Our go-to logistics partner.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-1/2 p-4">
              <div className="bg-gray-100 rounded-lg p-6">
                <p className="text-gray-800 italic mb-4">
                  "{testimonial.testimony}"
                </p>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
