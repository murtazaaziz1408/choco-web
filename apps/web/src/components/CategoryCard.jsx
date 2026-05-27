import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/category/${category.id}`} className="block group relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
        <img 
          src={category.image} 
          alt={`${category.name} category`} 
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500">
            {category.name}
          </h3>
          <span className="inline-block px-6 py-3 border border-white/50 text-white backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            Explore Collection
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;