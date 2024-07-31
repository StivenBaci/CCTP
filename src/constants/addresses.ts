import { SupportedChainId } from 'constants/chains'

/**
 * Map of supported chains to USDC contract addresses
 */
export const CHAIN_IDS_TO_USDC_ADDRESSES = {
  [SupportedChainId.ETH_SEPOLIA]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',

  [SupportedChainId.AVAX_FUJI]: '0x5425890298aed601595a70AB815c96711a31Bc65',

  [SupportedChainId.ARB_SEPOLIA]: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
}

/**
 * Map of supported chains to Token Messenger contract addresses
 */
export const CHAIN_IDS_TO_TOKEN_MESSENGER_ADDRESSES = {
  [SupportedChainId.ETH_SEPOLIA]: '0xbd3fa81b58ba92a82136038b25adec7066af3155',

  [SupportedChainId.AVAX_FUJI]: '0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0',

  [SupportedChainId.ARB_SEPOLIA]: '0x19330d10D9Cc8751218eaf51E8885D058642E08A',
}

/**
 * Map of supported chains to Message Transmitter contract addresses
 */
export const CHAIN_IDS_TO_MESSAGE_TRANSMITTER_ADDRESSES = {
  [SupportedChainId.ETH_SEPOLIA]: '0x0a992d191deec32afe36203ad87d7d289a738f81',

  [SupportedChainId.AVAX_FUJI]: '0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79',

  [SupportedChainId.ARB_SEPOLIA]: '0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca',
}
