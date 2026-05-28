import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const DeleteProductDialog = ({ product, onConfirm, onCancel }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirm = async () => {
    setIsDeleting(true);
    try {
      await onConfirm(product.id);
    } catch (error) {
      setIsDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm">
      <div className="bg-card w-full max-w-sm rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 p-6 text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-destructive/10 mb-6">
          <AlertTriangle className="h-8 w-8 text-destructive" />
        </div>
        
        <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">
          Delete Product?
        </h2>
        
        <p className="text-muted-foreground mb-8">
          Are you sure you want to delete <span className="font-semibold text-foreground">"{product?.name}"</span>? This action cannot be undone.
        </p>
        
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={isDeleting}
            className="flex-1 px-4 py-3 border border-border text-foreground hover:bg-muted rounded-xl font-medium transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={isDeleting}
            className="flex-1 px-4 py-3 bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl font-medium transition-colors disabled:opacity-50 shadow-sm"
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductDialog;