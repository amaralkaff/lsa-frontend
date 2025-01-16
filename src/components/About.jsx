import React from 'react'
import { motion } from 'framer-motion'
import aboutImg1 from '../assets/about1.jpeg'
import aboutImg2 from '../assets/about2.jpeg'
import aboutImg3 from '../assets/about3.jpeg'
import Dots from './Dots'

export default function About() {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-oldStandard text-[#4CAF50] text-4xl font-bold mb-16 text-right">About</h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Image Grid with Dots */}
          <div className="flex-1 flex gap-6 relative">
            {/* Dots */}
            <Dots className="absolute -top-20 right-16 z-0" />
            <Dots className="absolute -bottom-20 left-16 z-0" />
            
            {/* Large image on the left */}
            <motion.div 
              className="flex-[1.5] -mt-12 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src={aboutImg2}
                  alt="LSA Team 2" 
                  className="w-full h-[265px] object-cover rounded-xl shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
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
    </section>
  )
}