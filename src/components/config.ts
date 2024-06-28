import { createWalletClient, createPublicClient, custom, http } from 'viem'
import { celoAlfajores } from 'viem/chains'
 
export const walletClient = createWalletClient({
  chain: celoAlfajores, 
  transport: custom((window as any).ethereum)
})

export const publicClient = createPublicClient({
  chain: celoAlfajores,
  transport: http()
})

export const [account] = await walletClient.requestAddresses();