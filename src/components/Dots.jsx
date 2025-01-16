import React from 'react'
import { motion } from 'framer-motion'

const Dots = ({ className }) => {
  const dots = Array(25).fill(0) // 5x5 grid untuk tampilan lebih padat
  
  return (
    <div className={`grid grid-cols-5 gap-4 ${className}`}>
      {dots.map((_, index) => (
        <motion.div
          key={index}
          className="w-2 h-2 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-full shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0.3, 1, 0.3],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.15,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.5,
            transition: { duration: 0.2 }
          }}
        />
      ))}
    </div>
  )
}

export default Dots