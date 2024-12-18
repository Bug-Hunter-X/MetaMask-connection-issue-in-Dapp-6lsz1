async function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log("Make sure you have metamask!");
    return;
  }

  try {
    await ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (accounts.length > 0) {
      const account = accounts[0];
      console.log("Wallet is connected", account);
      return account;
    } else {
      console.log("No accounts found");
    }
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
  }
} 