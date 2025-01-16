import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import aboutImg1 from '../assets/about1.jpeg'
import aboutImg2 from '../assets/about2.jpeg'
import aboutImg3 from '../assets/about3.jpeg'
import Dots from './Dots'

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="font-oldStandard text-[#4CAF50] text-4xl font-bold mb-16 text-right"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Image Grid with Dots */}
          <div className="flex-1 flex gap-6 relative">
            {/* Dots */}
            <Dots className="absolute -top-20 right-16 z-0" />
            <Dots className="absolute -bottom-20 left-16 z-0" />
            
            {/* Large image on the left */}
            <motion.div 
              className="flex-[1.5] -mt-12 relative z-10 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(aboutImg1)}
            >
              <img 
                src={aboutImg1}
                alt="LSA Team 1" 
                className="w-full h-[550px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>
            
            {/* Two smaller images stacked on the right */}
            <div className="flex-1 flex flex-col gap-6 relative z-10">
              <motion.div
                className="cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(aboutImg2)}
              >
                <img 
                  src={aboutImg2}
                  alt="LSA Team 2" 
                  className="w-full h-[265px] object-cover rounded-xl shadow-lg"
                />
              </motion.div>
              <motion.div
                className="cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(aboutImg3)}
              >
                <img 
                  src={aboutImg3}
                  alt="LSA Team 3" 
                  className="w-full h-[265px] object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>

          {/* Text Content */}
          <motion.div 
            className="flex-1 text-right pt-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-poppins text-[24px] leading-relaxed mb-8">
              <span className="font-bold">LEMBAGA SINERGI ANALITIKA</span> adalah lembaga yang berfokus pada research di bidang media (Media Online dan Media Sosial) dan Kegiatan kemasyarakatan.
            </p>
            <p className="font-poppins text-[24px] leading-relaxed mb-8">
              Lembaga ini bertujuan untuk menghadirkan aspirasi masyarakat agar dapat didengar oleh stakeholder.
            </p>
            <p className="font-poppins text-[24px] leading-relaxed">
              Hasil analitik akan dibuat dalam bentuk Laporan dan dipublikasikan ke berbagai kanal media, serta digunakan untuk merancang program-program yang berdampak positif bagi masyarakat.
            </p>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-auto rounded-lg"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}