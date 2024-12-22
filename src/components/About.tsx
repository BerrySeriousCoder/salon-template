import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users />, value: '10k+', label: 'Happy Clients' },
    { icon: <Award />, value: '15+', label: 'Years Experience' },
    { icon: <Clock />, value: '50k+', label: 'Services Done' },
    { icon: <Heart />, value: '100%', label: 'Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">About Elegance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Where beauty meets expertise. Our passion is helping you look and feel your absolute best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Salon Interior"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2008, Elegance has been at the forefront of beauty innovation, 
              combining traditional techniques with modern approaches. Our team of expert 
              stylists and beauticians are passionate about creating personalized experiences 
              that enhance your natural beauty.
            </p>
            <p className="text-gray-600">
              We believe in using only the finest products and staying current with the latest 
              trends and techniques through continuous education and training. Our commitment 
              to excellence has earned us numerous awards and, more importantly, the trust and 
              loyalty of our clients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-pink-600 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;