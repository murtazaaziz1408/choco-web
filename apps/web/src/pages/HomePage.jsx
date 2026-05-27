import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Instagram, Youtube, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/supabase.js';
import Header from '@/components/Header.jsx';
import CategoryCard from '@/components/CategoryCard.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import { categories } from '@/data/products.js';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const { data, error } = await supabase
  .from('products')
  .select('*')
  .order('id', { ascending: false })
  .limit(4);

if (error) throw error;
const result = { items: data || [] };
        setFeaturedProducts(result.items);
      } catch (err) {
        console.error("Error fetching featured products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-500' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/', color: 'hover:text-green-500' }
  ];

  return (
    <>
      <Helmet>
        <title>Choco Charm - Handcrafted artisanal desserts</title>
        <meta name="description" content="Discover our collection of handcrafted artisan brownies, cakes, cheesecakes, and chocolates made with premium ingredients." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-[90vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 py-24 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20 pointer-events-none mix-blend-multiply" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="mb-8 text-primary">
                Handcrafted confections, baked with love
              </h1>
              <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80">
                <p>
                  Welcome to Choco Charm, where every treat tells a story of passion, precision, and premium ingredients. Our journey began in a small kitchen with a simple belief: that the perfect dessert should be rich, decadent, and made without compromise.
                </p>
                <p>
                  We source single-origin chocolate from sustainable farms, use organic butter and free-range eggs, and bake each batch by hand. No preservatives, no shortcuts—just pure, indulgent perfection. Each creation is a testament to our commitment to quality and the art of traditional baking.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Products from PocketBase */}
        <section id="featured" className="py-24 px-6 sm:px-8 lg:px-12 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-4"
            >
              <div>
                <h2 className="mb-2 text-primary">Latest Arrivals</h2>
                <p className="text-lg text-muted-foreground">Fresh from our artisanal kitchen</p>
              </div>
            </motion.div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-border/50 shadow-sm animate-pulse bg-card">
                    <div className="aspect-[4/5] bg-muted/40" />
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-muted/40 rounded-md w-3/4" />
                      <div className="h-5 bg-muted/40 rounded-md w-1/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : featuredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground border-2 border-dashed border-border rounded-2xl">
                No featured products currently available.
              </div>
            )}
          </div>
        </section>

        {/* Browse Collections Section */}
        <section id="products" className="py-24 px-6 sm:px-8 lg:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 text-primary">Browse Our Collections</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our handcrafted selection of premium baked goods and artisanal chocolates
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8 text-primary text-center">Our story</h2>
              <div className="space-y-6 text-lg text-foreground/80">
                <p>
                  Choco Charm was born from a simple obsession: creating the perfect dessert. What started as weekend experiments in a home kitchen has grown into a passionate pursuit of culinary excellence.
                </p>
                <p>
                  We believe that great baked goods start with great ingredients. That's why we partner directly with chocolate makers who share our values of sustainability and quality. Our butter comes from local dairies, our eggs from free-range farms, and every ingredient is chosen for its ability to create that perfect texture and deep flavor.
                </p>
                <p>
                  Each item is mixed, poured, and baked by hand in small batches. We don't use industrial mixers or automated processes. This hands-on approach means we can control every detail, from the exact moment the batter reaches peak glossiness to the precise second each batch should come out of the oven.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Footer */}
        <section id="socials" className="py-20 px-6 sm:px-8 lg:px-12 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-primary-foreground">Connect with us</h2>
              <p className="text-lg text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
                Follow our journey, see behind-the-scenes baking, and be the first to know about new flavors
              </p>
              
              <div className="flex items-center justify-center gap-8 mb-16">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-all duration-200 ${social.color} group`}
                      aria-label={social.name}
                    >
                      <Icon className="w-8 h-8" />
                    </a>
                  );
                })}
              </div>

              <div className="border-t border-primary-foreground/20 pt-8">
                <p className="text-sm text-primary-foreground/70 mb-4">
                  <span className="font-serif text-xl font-semibold text-primary-foreground">Choco Charm</span>
                </p>
                <p className="text-sm text-primary-foreground/70">
                  © 2026 Choco Charm. All rights reserved.
                </p>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <span className="text-primary-foreground/40">•</span>
                  <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
                    Terms of Service
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;