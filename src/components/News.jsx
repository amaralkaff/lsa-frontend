import React, { useState } from 'react';
import { ArrowDownRightIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import gallery1 from '../assets/gallery1.jpeg'
import gallery2 from '../assets/gallery2.jpeg'
import gallery3 from '../assets/gallery3.jpeg'
import gallery4 from '../assets/gallery4.jpeg'

const News = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const news = [
    {
      date: '19 Maret 2022',
      title: 'Dampaknya Terhadap Stabilitas Global',
      content: 'Ketegangan di Laut China Selatan semakin meningkat seiring perebutan klaim wilayah dan sumber daya alam di kawasan tersebut. Konflik ini melibatkan berbagai negara besar seperti China, Filipina, Vietnam, dan Amerika Serikat...',
      showImage: true,
      image: gallery1,
      order: 1
    },
    {
      date: '19 Maret 2022', 
      title: 'Dampaknya Terhadap Stabilitas Global',
      content: 'Ketegangan di Laut China Selatan semakin meningkat seiring perebutan klaim wilayah dan sumber daya alam di kawasan tersebut. Konflik ini melibatkan berbagai negara besar seperti China, Filipina, Vietnam, dan Amerika Serikat...',
      showImage: false,
      image: gallery2,
      order: 2
    },
    {
      date: '19 Maret 2022',
      title: 'Dampaknya Terhadap Stabilitas Global', 
      content: 'Ketegangan di Laut China Selatan semakin meningkat seiring perebutan klaim wilayah dan sumber daya alam di kawasan tersebut. Konflik ini melibatkan berbagai negara besar seperti China, Filipina, Vietnam, dan Amerika Serikat...',
      showImage: true,
      image: gallery3,
      order: 3
    },
    {
      date: '19 Maret 2022',
      title: 'Dampaknya Terhadap Stabilitas Global',
      content: 'Ketegangan di Laut China Selatan semakin meningkat seiring perebutan klaim wilayah dan sumber daya alam di kawasan tersebut. Konflik ini melibatkan berbagai negara besar seperti China, Filipina, Vietnam, dan Amerika Serikat...',
      showImage: false,
      image: gallery4,
      order: 4
    },
    {
      date: '19 Maret 2022',
      title: 'Dampaknya Terhadap Stabilitas Global',
      content: 'Ketegangan di Laut China Selatan semakin meningkat seiring perebutan klaim wilayah dan sumber daya alam di kawasan tersebut. Konflik ini melibatkan berbagai negara besar seperti China, Filipina, Vietnam, dan Amerika Serikat...',
      showImage: true,
      image: gallery1,
      order: 5
    },
    {
      date: '19 Maret 2022',
      title: 'Dampaknya Terhadap Stabilitas Global',
      content: 'Ketegangan di Laut China Selatan semakin meningkat seiring perebutan klaim wilayah dan sumber daya alam di kawasan tersebut. Konflik ini melibatkan berbagai negara besar seperti China, Filipina, Vietnam, dan Amerika Serikat...',
      showImage: false,
      image: gallery2,
      order: 6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

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
    <motion.div 
      id="news" 
      className="bg-[#EDEDED] py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4">
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
          <h3 className="text-black-600 uppercase text-xl tracking-wider mb-2">
            BLOG LEMBAGA SINERGI ANALITIKA
          </h3>
          <h2 className="text-green-600 text-5xl font-serif">
            News
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 [&>*:nth-child(5)]:md:-mt-[220px]"
        >
          {news.sort((a, b) => a.order - b.order).map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 ${item.showImage ? 'h-auto' : 'h-[200px]'}`}
            >
              {item.showImage && (
                <motion.div 
                  className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              )}
              <div className={`p-6 ${!item.showImage ? 'h-full flex flex-col justify-between' : ''}`}>
                <div>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                  <h3 className="text-green-600 text-xl font-medium mt-2 mb-3 hover:text-green-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className={`text-gray-600 text-sm leading-relaxed ${!item.showImage ? 'line-clamp-2' : 'line-clamp-3'} mb-4`}>
                    {item.content}
                  </p>
                </div>
                <motion.button 
                  className="text-green-600 flex items-center text-sm font-medium hover:text-green-700 transition-colors group"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowDownRightIcon className="w-4 h-4 mr-2 border border-green-600 rounded-full p-0.5" />
                  Cek Detail
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button 
            className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-full text-sm font-medium hover:bg-green-600 hover:text-white transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Tulisan Menarik Lainnya
          </motion.button>
        </motion.div>
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
    </motion.div>
  );
};

export default News;