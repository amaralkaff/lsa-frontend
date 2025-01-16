import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contactus" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h1 
          className="font-oldStandard text-[#008000] text-5xl mb-12 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Contact Cards */}
          <div className="space-y-6">
            {/* Lombok Office */}
            <motion.div 
              className="bg-[#F3FFF3] rounded-lg p-6 flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MapPinIcon className="text-[#008000] w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-[#008000] text-xl font-bold">Lembaga Sinergi Analitika Lombok</h2>
                <p className="text-gray-700 mt-2">
                  Perumahan Griya Rumak Asri Blok D No. 9, Kediri, Lombok Barat, 83362
                </p>
              </div>
            </motion.div>

            {/* Yogyakarta Office */}
            <motion.div 
              className="bg-[#F3FFF3] rounded-lg p-6 flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MapPinIcon className="text-[#008000] w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-[#008000] text-xl font-bold">Lembaga Sinergi Analitika Yogyakarta</h2>
                <p className="text-gray-700 mt-2">
                  Sinergi Analitika Yogyakarta RW.05 RW.02 Rumah No : 156 Jabung, Kalitirto, Berbah, Sleman, DIY. 55573
                </p>
              </div>
            </motion.div>

            {/* Call */}
            <motion.div 
              className="bg-[#F3FFF3] rounded-lg p-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <PhoneIcon className="text-[#008000] w-6 h-6 flex-shrink-0" />
              <div>
                <h2 className="text-[#008000] text-xl font-bold">Call</h2>
                <p className="text-gray-700">+62 8180 5765 431</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              className="bg-[#F3FFF3] rounded-lg p-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <EnvelopeIcon className="text-[#008000] w-6 h-6 flex-shrink-0" />
              <div>
                <h2 className="text-[#008000] text-xl font-bold">Email</h2>
                <p className="text-gray-700">mail@sinergianalitika.com</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Map */}
          <motion.div 
            className="h-full min-h-[500px] bg-[#F3FFF3] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.530192598251!2d116.12881820000001!3d-8.6410181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbfa9df6dc09d%3A0xdc1b33a81499d7f9!2sSinergi%20Analitika!5e0!3m2!1sen!2sid!4v1737036286628!5m2!1sen!2sid&reviews=0"
              className="w-full h-full" 
              frameBorder="0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;