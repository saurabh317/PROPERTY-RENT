import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PropertyContextProvider } from './Context/propertyContext';
import { WishlistContextProvider } from './Context/whishlistContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PropertyContextProvider>
    <WishlistContextProvider>
    <App />
    </WishlistContextProvider>  
    </PropertyContextProvider>
);
