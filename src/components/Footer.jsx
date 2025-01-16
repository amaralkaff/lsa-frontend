import React from 'react'
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#229D00] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo dan Nama */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 font-oldStandard">Lembaga Sinergi Analitika</h2>
              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="#" 
                  className="hover:text-gray-200 font-poppins"
                >
                  <FaInstagram size={24} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="#" 
                  className="hover:text-gray-200 font-poppins"
                >
                  <FaYoutube size={24} />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="#" 
                  className="hover:text-gray-200 font-poppins"
                >
                  <FaFacebook size={24} />
                </motion.a>
              </div>
            </motion.div>

            {/* Useful Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 font-poppins">USEFUL LINK</h3>
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 5 }} className="flex items-center"><ChevronRightIcon className="h-4 w-4 mr-1" /><a href="#" className="hover:text-gray-200 font-poppins">Home</a></motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center"><ChevronRightIcon className="h-4 w-4 mr-1" /><a href="#" className="hover:text-gray-200 font-poppins">About</a></motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center"><ChevronRightIcon className="h-4 w-4 mr-1" /><a href="#" className="hover:text-gray-200 font-poppins">Program</a></motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center"><ChevronRightIcon className="h-4 w-4 mr-1" /><a href="#" className="hover:text-gray-200 font-poppins">Gallery</a></motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center"><ChevronRightIcon className="h-4 w-4 mr-1" /><a href="#" className="hover:text-gray-200 font-poppins">Our Partners</a></motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center"><ChevronRightIcon className="h-4 w-4 mr-1" /><a href="#" className="hover:text-gray-200 font-poppins">News</a></motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center"><ChevronRightIcon className="h-4 w-4 mr-1" /><a href="#" className="hover:text-gray-200 font-poppins">Contact Us</a></motion.li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 font-poppins">CONTACT US</h3>
              <div className="space-y-2 font-poppins">
                <p>Phone: +62 8180 5765 431</p>
                <p>Email 1: sinergi.analitika@gmail.com</p>
                <p>Email 2: mail@sinergianalitika.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
      
      {/* Bagian baru di bawah footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-white py-4"
      >
        <div className="container mx-auto px-4">
          <div className="text-center font-poppins text-sm text-gray-600">
            © Copyright LSA. All Rights Reserved
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Footer 