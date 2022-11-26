import { useState, useContext, useEffect } from "react";
import { ethers } from "ethers";

import { hasEthereum, requestAccount } from "../../utils/ethereum";
import UserContext from "../Common/UserContext";

import {Button} from "react-bootstrap";

export default function Wallet() {
  // const userContext = useContext(UserContext);
  // UI state
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState("JOIN");

  // First load
  useEffect(function () {
    async function fetchConnectedAccount() {
      if (!hasEthereum()) {
        setMessage("Install MetaMask");
        setLoading(false);
        return;
      }

      await setConnectedAccount();

      setLoading(false);
    }
    fetchConnectedAccount();
  }, []);

  // Account changes
  useEffect(function () {
    async function listenMMAccount() {
      if (!hasEthereum()) return;
      window.ethereum.on("accountsChanged", async function (accounts) {
        if (accounts && accounts[0]) {
          setMessage(accounts[0]);
        } else {
          setConnected(false);
          setMessage("JOIN");
        }
      });
    }

    listenMMAccount();
  }, []);

  // Request connection to wallet
  async function requestConnection() {
    try {
      await requestAccount();
    } catch (error) {
      if (error.message) setMessage(error.message);
    }
  }

  // Request connection to wallet
  async function requestDisconnection() {
    try {
      setConnected(false);
      setMessage("JOIN");
    } catch (error) {
      if (error.message) setMessage(error.message);
    }
  }

  // Set address of connected wallet
  async function setConnectedAccount() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      // console.log(signer);
      const address = await signer.getAddress();

      if (address) {
        setConnected(true);
        setMessage("Disconnect");
      }
    } catch {
      setMessage("JOIN");
    }
  }

  // Handle connect wallet click
  async function handleConnectWallet() {
    setLoading(true);
    if (connected) {
      await requestDisconnection();
    } else {
      await requestConnection();
      await setConnectedAccount();
    }

    setLoading(false);
  }

  return (
    <Button className='join-btn' onClick={handleConnectWallet} disabled={message === "Install MetaMask"}>
      {!loading ? (
        <>
          <span
            className={
              connected
                ? "rounded-full h-2 w-2 block mr-2 bg-green-500"
                : "rounded-full h-2 w-2 block mr-2 bg-red-500"
            }
          />
          {message}
        </>
      ) : (
        <span>Loading...</span>
      )}
    </Button>
  );
}
