/* eslint-disable react/no-unescaped-entities */
const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      message: "Dropikk helped me ship my products faster than ever!",
    },
    { name: "Jane Smith", message: "Excellent service, highly recommend!" },
  ];

  return (
    <section className="bg-blue-100 p-8 text-center">
      <h2 className="text-3xl font-bold text-blue-700">
        What Our Customers Are Saying
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 italic">"{testimonial.message}"</p>
            <h4 className="text-xl font-semibold mt-4">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
