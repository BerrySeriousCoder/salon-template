import { motion } from 'framer-motion';
import nailart from '../assets/nailart.jpg';
import hair from '../assets/hair_styling.jpg';
import facial from '../assets/facial.jpg';

const services = [
  {
    image: hair,
    title: 'Hair Styling',
    description: 'Expert cuts, coloring, and styling for all hair types',
    price: 'from $50'
  },
  {
    image: facial,
    title: 'Facial Treatments',
    description: 'Rejuvenating facials and skincare treatments',
    price: 'from $75'
  },
  {
    image: nailart,
    title: 'Nail Art',
    description: 'Professional manicures and creative nail designs',
    price: 'from $35'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.8
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl font-serif text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our range of professional beauty services designed to enhance your natural beauty
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white p-2 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div 
                className="overflow-hidden rounded-md mb-4"
                whileHover="hover"
              >
                <motion.img
                  variants={imageVariants}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              
              <motion.div
                variants={textVariants}
                className="p-4"
              >
                <motion.h3 
                  className="text-xl font-semibold mb-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-4"
                  variants={textVariants}
                >
                  {service.description}
                </motion.p>
                <motion.p 
                  className="text-pink-600 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.price}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;