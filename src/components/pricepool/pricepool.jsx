'use client';

import { motion } from 'framer-motion';



function Pricepool() {
  return (
    <section className="prize">
      <motion.div
        
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
        
          className="flex-[0.75] flex justify-center flex-col"
        >
        <div>
            <br />
        <p className="font-bungee-shade font-bold text-3xl text-white animate-glow-pulse hover:shadow-glow hover:text-4xl transition-all duration-3">
    PRIZE POOL OF INR 8K
  </p>
</div>
<div className="mt-[48px] flex flex-col items-center gap-[24px]">
  <div className="w-[60vw] p-4 shadow hover:shadow-lg transition-shadow duration-300 mb-4">
    <p className="font-bold">🏆 WINNER</p>
    <p>Prize will be given to a project that outstands all other submissions.</p>
  </div>
  <div className="w-[60vw] p-4 shadow hover:shadow-lg transition-shadow duration-300">
    <p className="font-bold">🏆 Runner Up</p>
    <p>Runner-up prize will be given to the second best project of the hackathon.</p>
  </div>
  <br />
  <br />
</div>



          
        </motion.div>
        
      </motion.div>
      <motion.div
    
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
      </motion.div>
    </section>
  );
}

export default Pricepool;