// components/TestimonialsSection.tsx
import { MessageCircle, Star } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section id="testimoni" className="pt-[5em] pb-[10em] bg-gray-50">
      <div className="px-5">
        <span className="flex flex-col items-center">
          <h1 className="text-4xl tablet:text-6xl font-bold text-center text-red-600">APA ?</h1>
          <h2 className="text-xl tablet:text-3xl font-bold text-center mb-5">KATA MEREKA</h2>
        </span>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Pelanggan {i}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Service suspensi di sini sangat memuaskan. Motor jadi lebih nyaman dikendarai."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
