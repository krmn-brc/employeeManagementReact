import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'boxicons/css/boxicons.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnMount: false,
         refetchOnWindowFocus: false
      }
   }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <QueryClientProvider client={queryClient}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </QueryClientProvider>


);

