import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Volunteer',
      image: '👩‍🏫',
      quote: 'Being part of Hope Foundation has been incredibly rewarding. Seeing the direct impact of our work in the community motivates me every day.',
      color: 'blue'
    },
    {
      name: 'Michael Chen',
      role: 'Donor',
      image: '👨‍💼',
      quote: 'This NGO changed many lives, including mine. Their transparency and dedication to their mission makes every donation worthwhile.',
      color: 'green'
    },
    {
      name: 'Priya Patel',
      role: 'Community Leader',
      image: '👩‍⚕️',
      quote: 'The health camps and education programs have transformed our village. Hope Foundation truly understands our needs and delivers real solutions.',
      color: 'orange'
    }
  ];

  const colorMap: Record<string, string> = {
    blue: 'border-blue-200 bg-blue-50',
    green: 'border-green-200 bg-green-50',
    orange: 'border-orange-200 bg-orange-50'
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What People Say</h2>
          <p className="text-lg text-gray-600">
            Hear from our volunteers, donors, and community members
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className={`${colorMap[testimonial.color]} border-2 rounded-2xl p-6 hover:shadow-lg transition-shadow relative`}
            >
              <Quote className="w-8 h-8 text-gray-300 absolute top-4 right-4" />

              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center text-3xl mb-4">
                  {testimonial.image}
                </div>
                <h4 className="font-bold text-lg text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                </p>
              </div>

              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
