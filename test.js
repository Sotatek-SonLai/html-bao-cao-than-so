const {ethers} = require('ethers');
// console.log('ethers.providers', ethers)
async function getNetworkName(chainId) {
  const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/c60b9869d6b042b2bab0ccbf94d38c26');

  try {
    const network = await provider.getNetwork();
    console.log('network', network)

    if (network.chainId === chainId) {
      return network.name;
    } else {
      throw new Error('Chain ID does not match the current network');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}


const chainId = 0xa4b1; // Ethereum mainnet chain ID
getNetworkName(chainId).then((networkName) => {
  console.log(`Network Name: ${networkName}`);
});
