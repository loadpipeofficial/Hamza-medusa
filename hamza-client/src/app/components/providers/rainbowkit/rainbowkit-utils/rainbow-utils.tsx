import { getDefaultWallets, darkTheme } from "@rainbow-me/rainbowkit"
import { configureChains, createConfig } from "wagmi"
import { mainnet, optimismSepolia, sepolia } from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"

const PROJECT_ID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ''
const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || ''

export const darkThemeConfig = darkTheme({
  accentColor: "#94D42A",
  accentColorForeground: "white",
  borderRadius: "large",
  fontStack: "system",
  overlayBlur: "small",

})
export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [optimismSepolia, sepolia, mainnet],
  [
    alchemyProvider({
      apiKey: ALCHEMY_API_KEY,
    }),
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://opt-sepolia.g.alchemy.com/v2/VrVSe8y0T1pBnrwgzgFr2vtHl9Dtj3Fn",
        }
      },
    }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: "op_sep",
  projectId: PROJECT_ID,
  chains,
})
// Config in v1.x.wagmi Client in 2.x.wagmi?
export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})
