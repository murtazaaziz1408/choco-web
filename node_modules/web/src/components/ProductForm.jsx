import React, { useState, useEffect } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

const CATEGORIES = ['Brownie', 'Cake', 'Cheese Cake', 'Chocolate'];

const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Brownie',
    image_url: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        price: product.price || '',
        category: product.category || 'Brownie',
        image_url: product.image_url || ''
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const submitData = {
        ...formData,
        price: parseFloat(formData.price)
      };
      
      if (isNaN(submitData.price) || submitData.price <= 0) {
        throw new Error("Price must be a valid positive number");
      }
      
      if (!submitData.name.trim()) {
        throw new Error("Product name is required");
      }

      await onSubmit(submitData);
    } catch (err) {
      setError(err.message || 'Failed to save product. Please check your inputs.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm">
      <div className="bg-card w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-serif font-semibold text-foreground">
            {product ? 'Edit Product' : 'Add New Product'}
          </h2>
          <button 
            onClick={onCancel}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="p-3 text-sm text-destructive-foreground bg-destructive rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Product Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="e.g., Decadent Chocolate Truffle"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-medium text-foreground">
                Price (₹)
              </label>
              <input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                required
                value={formData.price}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="0.00"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium text-foreground">
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="image_url" className="text-sm font-medium text-foreground flex justify-between">
              <span>Image URL</span>
              <span className="text-muted-foreground text-xs font-normal">(Required by DB schema)</span>
            </label>
            <input
              id="image_url"
              name="image_url"
              type="url"
              value={formData.image_url}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="https://example.com/image.jpg"
            />
            
            {/* Image Preview */}
            <div className="mt-3 aspect-video bg-muted rounded-xl border border-border overflow-hidden flex items-center justify-center relative">
              {formData.image_url ? (
                <img 
                  src={formData.image_url} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = ''; 
                    e.target.parentElement.innerHTML = '<div class="text-muted-foreground text-sm text-center p-4">Invalid image URL or unable to load preview</div>';
                  }}
                />
              ) : (
                <div className="flex flex-col items-center text-muted-foreground">
                  <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                  <span className="text-sm">Image preview</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onCancel}
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 border border-border text-foreground hover:bg-muted rounded-xl font-medium transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-medium transition-colors disabled:opacity-50 shadow-sm"
            >
              {isSubmitting ? 'Saving...' : (product ? 'Save Changes' : 'Add Product')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;