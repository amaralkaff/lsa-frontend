import React, { useState } from 'react'
import Dots from './Dots'
import { motion, AnimatePresence } from 'framer-motion'
import gallery1 from '../assets/gallery1.jpeg'
import gallery2 from '../assets/gallery2.jpeg'
import gallery3 from '../assets/gallery3.jpeg'

const Program = () => {
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

  const programs = [
    {
      title: "Human Library",
      subtitle: "Cerita yang Menginspirasi, Langsung dari Sumbernya.",
      description: 'Human Library adalah program yang mempertemukan individu dengan pengalaman hidup unik untuk berbagi kisah mereka sebagai "buku hidup". Program ini bertujuan untuk mengurangi prasangka, memperluas wawasan, dan membangun empati melalui dialog langsung dengan para pembicara.',
      image: gallery1
    },
    {
      title: "Sosialisasi Bahaya Pernikahan Usia Dini", 
      subtitle: "Edukasi untuk Masa Depan Generasi Muda yang Lebih Cerah.",
      description: "Program ini dirancang untuk memberikan pemahaman kepada masyarakat, terutama remaja, tentang risiko pernikahan usia dini.",
      image: gallery2
    },
    {
      title: "Workshop Penulisan Buku",
      subtitle: "Menyuarakan Ide, Mengubah Pemikiran.",
      description: "Workshop ini memberikan pelatihan intensif kepada peserta yang ingin menuangkan ide dan pengalaman mereka ke dalam bentuk buku.",
      image: gallery3
    }
  ]

  return (
    <section id="program" style={{ background: 'linear-gradient(215.37deg, #F8FFE6 8.24%, #FFFFFF 79.24%)' }} className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 relative flex justify-between items-start">
          <motion.div 
            className="max-w-3xl relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="font-oldStandard text-[#4CAF50] text-4xl mb-4 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Program
            </motion.p>
            <div className="relative">
              <motion.h3 
                className="text-3xl md:text-4xl font-poppins font-medium leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Jelajahi dan Ikuti Berbagai Program Sosial Kami untuk Meningkatkan Kesadaran dan Memberdayakan Masyarakat
              </motion.h3>
              <motion.span 
                style={{ color: '#80CE6A', fontSize: '72px', fontFamily: 'Arial', position: 'absolute', right: '-40px', top: '-20px' }} 
                className="font-bold"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                "
              </motion.span>
            </div>
          </motion.div>
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Dots className="mt-8" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div 
              key={index} 
              style={{ background: 'linear-gradient(180deg, rgba(128, 206, 106, 0.15) 0%, rgba(128, 206, 106, 0.05) 100%)', border: '1px solid #80CE6A' }} 
              className="rounded-lg p-6 hover:shadow-lg transition duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="mb-48"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 style={{ color: '#80CE6A' }} className="text-2xl font-poppins font-semibold mb-2">{program.title}</h4>
                <p className="text-lg font-poppins font-medium mb-4" style={{ color: '#1E1E1E' }}>"{program.subtitle}"</p>
                <p className="text-base font-poppins text-gray-600">{program.description}</p>
              </motion.div>
              <motion.div 
                className="h-48 overflow-hidden rounded-lg absolute bottom-6 left-6 right-6 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(program.image)}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
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

export default Program 