import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, LogOut, PackageSearch, Image as ImageIcon } from 'lucide-react';
// 1. We imported your new Supabase bridge here:
import { supabase } from '@/supabase.js'; 
import { useAdminAuth } from '@/contexts/AdminAuthContext.jsx';
import ProductForm from '@/components/ProductForm.jsx';
import DeleteProductDialog from '@/components/DeleteProductDialog.jsx';

const AdminDashboard = () => {
  const { seller, logout } = useAdminAuth();
  const navigate = useNavigate();
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Modals state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // 2. Updated to pull products from Supabase
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const { data, error: fetchError } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: false });

      if (fetchError) throw fetchError;
      
      setProducts(data || []);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch products from Supabase:", err);
      setError("Failed to load products. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsFormOpen(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setIsDeleteDialogOpen(true);
  };

  const showSuccess = (msg) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // 3. Updated to Save and Update products in Supabase
  const handleFormSubmit = async (formData) => {
    try {
      if (selectedProduct) {
        // Update an existing product
        const { error: updateError } = await supabase
          .from('products')
          .update(formData)
          .eq('id', selectedProduct.id);

        if (updateError) throw updateError;
        showSuccess('Product updated successfully!');
      } else {
        // Create a brand new product and automatically attach the seller's tracking ID
        const productData = {
          ...formData,
          seller_id: seller?.email || 'anonymous_seller'
        };

        const { error: insertError } = await supabase
          .from('products')
          .insert([productData]);

        if (insertError) throw insertError;
        showSuccess('Product created successfully!');
      }
      setIsFormOpen(false);
      fetchProducts();
    } catch (err) {
      console.error("Supabase submission error:", err);
      throw err; 
    }
  };

  // 4. Updated to Delete products from Supabase
  const handleConfirmDelete = async (id) => {
    try {
      const { error: deleteError } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;

      showSuccess('Product deleted successfully!');
      setIsDeleteDialogOpen(false);
      fetchProducts();
    } catch (err) {
      console.error("Supabase delete failed:", err);
      alert("Failed to delete product."); 
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dashboard - Choco Charm Admin</title>
      </Helmet>

      {/* Admin Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif font-bold text-primary">Choco Charm</h1>
            <p className="text-sm text-muted-foreground">Seller Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm font-medium text-foreground bg-muted px-4 py-2 rounded-full">
              {seller?.email}
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors font-medium text-sm"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {successMessage && (
          <div className="mb-8 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-xl border border-green-200 dark:border-green-800 flex items-center shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" />
            {successMessage}
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-serif font-semibold text-foreground">Products Catalog</h2>
            <p className="text-muted-foreground mt-1">Manage your artisanal desserts and chocolates</p>
          </div>
          <button
            onClick={handleAddProduct}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:bg-primary/90 transition-all active:scale-[0.98] shadow-sm font-medium"
          >
            <Plus className="w-5 h-5" />
            Add New Product
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
          {isLoading ? (
            <div className="p-12 flex flex-col items-center justify-center text-muted-foreground">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
              <p>Loading products...</p>
            </div>
          ) : error ? (
            <div className="p-12 text-center">
              <p className="text-destructive mb-4">{error}</p>
              <button 
                onClick={fetchProducts}
                className="text-primary underline hover:text-primary/80"
              >
                Try again
              </button>
            </div>
          ) : products.length === 0 ? (
            <div className="p-16 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
                <PackageSearch className="w-10 h-10 text-primary/50" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                You haven't added any products to your store yet. Click the button above to create your first item.
              </p>
              <button
                onClick={handleAddProduct}
                className="text-primary font-medium hover:underline"
              >
                Add a product now
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b border-border text-muted-foreground text-sm uppercase tracking-wider">
                    <th className="p-4 font-medium pl-6">Product</th>
                    <th className="p-4 font-medium">Category</th>
                    <th className="p-4 font-medium">Price</th>
                    <th className="p-4 font-medium text-right pr-6">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 pl-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-lg bg-muted border border-border overflow-hidden flex-shrink-0 flex items-center justify-center">
                            {product.image_url ? (
                              <img 
                                src={product.image_url} 
                                alt={product.name} 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <ImageIcon className="w-6 h-6 text-muted-foreground/50" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-foreground font-serif text-lg">{product.name}</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">ID: {product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                          {product.category}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="font-medium text-primary">₹{product.price}</span>
                      </td>
                      <td className="p-4 pr-6">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEditProduct(product)}
                            className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                            aria-label="Edit product"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteClick(product)}
                            className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                            aria-label="Delete product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Modals */}
      {isFormOpen && (
        <ProductForm 
          product={selectedProduct} 
          onSubmit={handleFormSubmit} 
          onCancel={() => setIsFormOpen(false)} 
        />
      )}

      {isDeleteDialogOpen && selectedProduct && (
        <DeleteProductDialog 
          product={selectedProduct}
          onConfirm={handleConfirmDelete}
          onCancel={() => setIsDeleteDialogOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;