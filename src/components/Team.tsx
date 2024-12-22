import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Clock,  } from 'lucide-react';
import artistOne from '../assets/artistone.jpg'
import artistTwo from '../assets/artisttwo.jpg'
import artistThree from '../assets/artistthree.jpg'
const teamMembers = [
  {
    name: 'Emma Thompson',
    role: 'Master Stylist',
    image: artistOne,
    specialties: ['Color Expert', 'Bridal Styling', 'Hair Extensions'],
    experience: '8 years',
    awards: ['Best Colorist 2023', 'Style Master'],
    availability: 'Mon-Fri'
  },
  {
    name: 'Sophie Chen',
    role: 'Senior Beautician',
    image: artistTwo,
    specialties: ['Facial Treatments', 'Microblading', 'Skin Care'],
    experience: '6 years',
    awards: ['Beauty Expert 2023'],
    availability: 'Tue-Sat'
  },
  {
    name: 'Maria Garcia',
    role: 'Nail Artist',
    image: artistThree,
    specialties: ['3D Nail Art', 'Gel Extensions', 'Hand Therapy'],
    experience: '5 years',
    awards: ['Creative Nail Design'],
    availability: 'Wed-Sun'
  }
];

interface HeroProps {
    onBookNow: () => void;
  }

const TeamShowcase: React.FC<HeroProps> = ({ onBookNow }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Meet Our Artists</h2>
          <div className="w-24 h-1 bg-pink-200 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our team of experienced professionals is dedicated to making you look and feel your best
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div 
                className="relative overflow-hidden rounded-xl"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[500px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                    transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: activeIndex === index ? 1 : 0, y: activeIndex === index ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>{member.experience} Experience</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award size={16} />
                          <span>{member.awards.join(', ')}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>Available: {member.availability}</span>
                        </div>
                        <div className="pt-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm"
                           
                            onClick={() => {
                              onBookNow();
                              
                            }}
                          >
                            Book Appointment 
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-pink-600">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {member.specialties.map((specialty, i) => (
                    <span 
                      key={i}
                      className="bg-pink-50 text-pink-600 text-xs px-3 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;