import React from 'react';
import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-black/80">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Volunteers working together"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-oldStandard">
          Setiap Langkah Anda
          <br />
          Perubahan Bagi Banyak Orang
        </h1>
        <p className="text-lg md:text-xl max-w-3xl font-poppins">
          Kami hadir untuk menyuarakan aspirasi, mendukung inisiatif sosial, dan membangun perubahan yang berarti bersama Anda.
        </p>
      </div>
    </div>
  );
};

export default Hero;