import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Timeline dot */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/50">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Content card */}
        <div className={`flex-1 bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-emerald-500 transition-all duration-300 group ${isEven ? 'md:text-right' : 'md:text-left'}`}>
          <div className="flex md:hidden items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {exp.position}
              </h3>
            </div>
          </div>
          
          <div className="hidden md:block">
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
              {exp.position}
            </h3>
          </div>
          
          <div className={`flex items-center gap-2 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">{exp.period}</span>
          </div>
          
          <h4 className="text-lg font-semibold text-emerald-400 mb-3">{exp.company}</h4>
          
          <p className="text-gray-400 mb-4 leading-relaxed">
            {exp.description}
          </p>
          
          <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            {exp.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-800 text-cyan-400 text-xs font-medium rounded-full border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Connecting line */}
      {index < 2 && (
        <div className="hidden md:block absolute left-1/2 top-16 w-0.5 h-full bg-gradient-to-b from-emerald-500 to-cyan-500 transform -translate-x-1/2"></div>
      )}
    </motion.div>
  );
};

const Experience = ({ experience }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-24">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
