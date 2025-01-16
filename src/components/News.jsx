import React from 'react';
import { motion } from 'framer-motion';
import gallery1 from '../assets/gallery1.jpeg'
import gallery2 from '../assets/gallery2.jpeg'
import gallery3 from '../assets/gallery3.jpeg'
import gallery4 from '../assets/gallery4.jpeg'

const News = () => {
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

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-gray-600 uppercase text-sm tracking-wider mb-2">
            BLOG LEMBAGA SINERGI ANALITIKA
          </h3>
          <h2 className="text-green-600 text-5xl font-serif">
            News
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.sort((a, b) => a.order - b.order).map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${item.showImage ? 'h-auto' : 'h-[200px]'}`}
            >
              {item.showImage && (
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
              )}
              <div className={`p-6 ${!item.showImage ? 'h-full flex flex-col justify-between' : ''}`}>
                <div>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                  <h3 className="text-green-600 text-xl font-medium mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className={`text-gray-600 text-sm leading-relaxed ${!item.showImage ? 'line-clamp-2' : 'line-clamp-3'} mb-4`}>
                    {item.content}
                  </p>
                </div>
                <div className="flex items-center">
                  <button className="text-green-600 flex items-center text-sm font-medium hover:text-green-700 transition-colors">
                    Cek Detail
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-full text-sm font-medium hover:bg-green-600 hover:text-white transition-colors duration-300">
            Tulisan Menarik Lainnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;