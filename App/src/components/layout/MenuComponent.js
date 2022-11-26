import React from 'react';

import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useIsMounted } from '../hooks/useIsMounted';

function MenuComponent() {

    const mounted = useIsMounted();
    const { address } = useAccount();

  return (
        <div>
        <ConnectButton 
        label="Connect FEVM Wallet"
        accountStatus={"full"}
        chainStatus={"name"}
        />
        { mounted ? address && <p>My Address is { address }</p>: null }
        </div> 
    );
}

export default MenuComponent;