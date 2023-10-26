import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ContextProvider } from './Context/Context'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


