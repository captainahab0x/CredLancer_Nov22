import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "@rainbow-me/rainbowkit/styles.css";

import { Chain, connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig, } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { injectedWallet, metaMaskWallet, } from '@rainbow-me/rainbowkit/wallets';

const wallabyChain: Chain = {
  id: 31_415,
  name: 'Wallaby',
  network: 'wallaby',
  nativeCurrency: {
    decimals: 18,
    name: 'Wallaby',
    symbol: 'tFIL',
  },
  rpcUrls: {
    default: 'https://wallaby.node.glif.io/rpc/v0',
  },
  blockExplorers: {
    default: { name: 'Glif', url: 'https://explorer.glif.io/wallaby' },
  },
  testnet: true,
};

const { provider, chains } = configureChains(
  [wallabyChain],
  [jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })]
);  

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <App />
    </RainbowKitProvider>
  </WagmiConfig>
);

reportWebVitals();
