import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { supabase } from '@/supabase.js';
import { categories } from '@/data/products.js';
import ProductCard from '@/components/ProductCard.jsx';
import SocialContactSection from '@/components/SocialContactSection.jsx';

// Map URL slugs to database category names
const categoryMap = {
  'brownie': 'Brownie',
  'cake': 'Cake',
  'cheese-cake': 'Cheese Cake',
  'chocolate': 'Chocolate'
};

const ProductCategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: false,
    dragFree: true,
    containScroll: 'trimSnaps'
  });
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Static structural data for headers/meta
  const category = categories.find(c => c.id === categoryName);
  const dbCategoryName = categoryMap[categoryName];

  useEffect(() => {
    if (!category || !dbCategoryName) {
      navigate('/');
    }
  }, [category, dbCategoryName, navigate]);

  const fetchProducts = useCallback(async () => {
    if (!dbCategoryName) return;
    
    setIsLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
  .from('products')
  .select('*')
  .ilike('category', dbCategoryName) // This makes 'brownie' match 'Brownie' automatically!
  .order('id', { ascending: false });

if (error) throw error;
const result = data || [];
      setProducts(result);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("We encountered an error loading these items.");
    } finally {
      setIsLoading(false);
    }
  }, [dbCategoryName]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, products]);

  if (!category) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>{`${category.name} Collection - Choco Charm`}</title>
        <meta name="description" content={category.description} />
      </Helmet>

      {/* Minimal Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-12 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              {category.name} Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {category.description}
            </p>
          </motion.div>

          {/* Carousel Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-24"
          >
            {isLoading ? (
              <div className="flex gap-6 overflow-hidden">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_25%] min-w-0">
                    <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm animate-pulse bg-card h-full flex flex-col">
                      <div className="aspect-[4/5] bg-muted/40" />
                      <div className="p-6 space-y-4 flex-grow">
                        <div className="h-6 bg-muted/40 rounded-md w-3/4" />
                        <div className="h-4 bg-muted/40 rounded-md w-full" />
                        <div className="h-4 bg-muted/40 rounded-md w-2/3" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-16 px-6 border-2 border-dashed border-destructive/30 rounded-3xl bg-destructive/5 max-w-2xl mx-auto">
                <p className="text-destructive font-medium mb-4">{error}</p>
                <button 
                  onClick={fetchProducts}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-full hover:bg-muted transition-colors text-foreground"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </button>
              </div>
            ) : products.length > 0 ? (
              <>
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex gap-6 py-4">
                    {products.map((product) => (
                      <div 
                        key={product.id} 
                        className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_25%] min-w-0"
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-4 mt-8">
                  <button
                    onClick={() => emblaApi?.scrollPrev()}
                    disabled={!canScrollPrev}
                    className="p-3 rounded-full border border-border text-foreground hover:bg-secondary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                    aria-label="Previous items"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => emblaApi?.scrollNext()}
                    disabled={!canScrollNext}
                    className="p-3 rounded-full border border-border text-foreground hover:bg-secondary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                    aria-label="Next items"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-16 text-muted-foreground border-2 border-dashed border-border rounded-3xl bg-secondary/10">
                <div className="text-4xl mb-4 opacity-50">🧁</div>
                <p className="text-lg">More {category.name.toLowerCase()}s coming soon!</p>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SocialContactSection />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProductCategoryPage;