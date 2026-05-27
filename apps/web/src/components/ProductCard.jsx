import React from 'react';

const ProductCard = ({ product }) => {
  const imageUrl = product.image_url || product.image;
  const formattedPrice = typeof product.price === 'number' ? `₹${product.price}` : product.price;

  return (
    <div className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted/20">
        <img 
          src={imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow bg-card">
        <div className="flex-grow">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {product.description}
            </p>
          )}
        </div>
        <p className="text-lg font-medium text-primary mt-auto pt-2 border-t border-border/40">
          {formattedPrice}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;