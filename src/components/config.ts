import { createWalletClient, createPublicClient, custom, http } from 'viem'
import { sepolia } from 'viem/chains'
 
export const walletClient = createWalletClient({
  chain: sepolia, 
  transport: custom((window as any).ethereum)
})

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http()
})

export const [account] = await walletClient.requestAddresses();