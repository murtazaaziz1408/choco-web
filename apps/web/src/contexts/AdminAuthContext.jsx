import React, { createContext, useContext, useState } from 'react';

const AdminAuthContext = createContext({});

export const AdminAuthProvider = ({ children }) => {
  // Check if a seller session is already active in the browser
  const [seller, setSeller] = useState(() => {
    const savedSeller = localStorage.getItem('choco_agency_seller');
    return savedSeller ? JSON.parse(savedSeller) : null;
  });

  const login = async (email, password) => {
    // DEVELOPER BYPASS: This logs you in locally using whatever credentials you type!
    // It also saves it so the dashboard can display your email correctly.
    const currentSeller = { email: email };
    setSeller(currentSeller);
    localStorage.setItem('choco_agency_seller', JSON.stringify(currentSeller));
    return currentSeller;
  };

  const logout = () => {
    setSeller(null);
    localStorage.removeItem('choco_agency_seller');
  };

  return (
    <AdminAuthContext.Provider value={{ seller, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);