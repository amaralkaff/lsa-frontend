import React from 'react'
import { motion } from 'framer-motion'
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import partner4 from '../assets/partner4.png'
import partner5 from '../assets/partner5.png'
import partner6 from '../assets/partner6.png'
import partner7 from '../assets/partner7.png'
import partner8 from '../assets/partner8.png'
import partner9 from '../assets/partner9.png'
import partner10 from '../assets/partner10.png'

const Partners = () => {
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <motion.section 
      id="patner"
      className="py-16 px-4 md:px-8 bg-white overflow-hidden" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#4CAF50] font-oldStandard text-4xl font-bold">Our Partners</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="w-40 h-40 relative flex items-center justify-center p-4"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: {
                  duration: 0.3
                }
              }}
            >
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Partners 