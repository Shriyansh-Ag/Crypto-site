import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider , theme } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />

    <ChakraProvider theme={theme}>
      <ColorModeSwitcher>
      </ColorModeSwitcher>
      <App />
    
    </ChakraProvider>
    
  </StrictMode>
);

export const server = `https://api.coingecko.com/api/v3`;

