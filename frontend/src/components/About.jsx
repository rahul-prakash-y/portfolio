import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Users, Award } from 'lucide-react';

const About = ({ developerInfo }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile development with rapid iteration and deployment"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Effective team player with strong communication skills"
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Committed to delivering excellence in every project"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {developerInfo.bio}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    <span><strong className="text-emerald-400">5+</strong> years of experience</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    <span><strong className="text-cyan-400">30+</strong> projects completed</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    <span><strong className="text-orange-400">15+</strong> happy clients</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-emerald-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
