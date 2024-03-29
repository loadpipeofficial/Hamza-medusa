// 'use client'
// import React, { useState } from 'react'
// import { Grid, Box, HStack, Button, Flex } from '@chakra-ui/react'
// import fire from '../../../../../public/product_filters/fire.png'
// import gift from '../../../../../public/product_filters/gift.png'
// import game from '../../../../../public/product_filters/games.png'
// import laptop from '../../../../../public/product_filters/electronics.png'
// import collections from '../../../../../public/product_filters/collections.png'
// import coinbase from '../../../../../public/wallet_connect/coinbase.png'
// import metamask from '../../../../../public/wallet_connect/metamask.png'
// import rainbow from '../../../../../public/wallet_connect/rainbow.jpeg'
// import wallet from '../../../../../public/wallet_connect/wallet.png'
// import arrow from '../../../../../public/Vector.png'
// import Image from 'next/image'
// import Login from '@/components/AuthenticateAdmin/Login'
// import ProductCollections from '@modules/collections/product_collection_filter'
//
// // TODO: This component needs to be refactored once the seed.json is updated with Categories && Collections
// const RecommendedItems = () => {
//     const [collectionId, setCollectionId] = useState(
//         'pcol_01HRVF8HCVY8B00RF5S54THTPC'
//     )
//
//     return (
//         <Flex className="font-sora" maxW="100%" bg="black" p={5}>
//             <Box
//                 p={5}
//                 mx={12}
//                 bgGradient="linear(to-l, #53594A 70%, #2C272D 100%)" // This creates a gradient from right to left
//                 borderRadius="2xl"
//                 boxShadow="lg"
//                 marginLeft={{ lg: 4 }}
//                 marginRight={{ lg: 4 }}
//                 flex="1"
//                 width="70%"
//                 bg="#2C272D"
//             >
//                 <HStack justifyContent="space-around" mx={12} my={6}>
//                     <Box
//                         color="whitesmoke"
//                         fontWeight="bold"
//                         fontSize="2xl"
//                         textAlign="center"
//                     >
//                         CONNECT YOUR <br />
//                         FAVORITE WALLET
//                     </Box>
//                     <Image
//                         className="mr-4"
//                         src={arrow}
//                         alt={'Img of arrow'}
//                         width={22}
//                         height={22}
//                     />
//
//                     <Button
//                         fontWeight="italic"
//                         size="md"
//                         bg="transparent"
//                         color="white"
//                         borderRadius="full"
//                         border="1px" // Sets the border width
//                         borderColor="whiteAlpha.600"
//                     >
//                         <Image
//                             className="mr-2"
//                             src={coinbase}
//                             alt={'Img of coinbase'}
//                             width={22}
//                             height={22}
//                         />
//                         Coinbase
//                     </Button>
//                     <Button
//                         fontWeight="italic"
//                         size="md"
//                         bg="transparent"
//                         color="white"
//                         borderRadius="full"
//                         border="1px" // Sets the border width
//                         borderColor="whiteAlpha.600"
//                     >
//                         <Image
//                             className="mr-2"
//                             src={metamask}
//                             alt={'Img of a game'}
//                             width={22}
//                             height={22}
//                         />
//                         Metamask
//                     </Button>
//                     <Button
//                         fontWeight="italic"
//                         size="md"
//                         bg="transparent"
//                         color="white"
//                         borderRadius="full"
//                         border="1px" // Sets the border width
//                         borderColor="whiteAlpha.600"
//                     >
//                         <Image
//                             className="mr-2"
//                             src={rainbow}
//                             alt={'Img of a laptop'}
//                             width={22}
//                             height={22}
//                         />
//                         Rainbowkit
//                     </Button>
//                     <Button
//                         fontWeight="italic"
//                         size="md"
//                         bg="transparent"
//                         color="white"
//                         borderRadius="full"
//                         border="1px" // Sets the border width
//                         borderColor="whiteAlpha.600"
//                     >
//                         <Image
//                             className="mr-2"
//                             src={wallet}
//                             alt={'Img of a collections'}
//                             width={22}
//                             height={22}
//                         />
//                         Wallet Connect
//                     </Button>
//                 </HStack>
//                 <Box
//                     height="1px"
//                     bg="whiteAlpha.600"
//                     opacity="0.5"
//                     width="full"
//                     borderRadius="full"
//                 />
//                 <HStack justifyContent="space-around" mx={12} my={6}>
//                     <Button
//                         fontWeight="italic"
//                         bg="white"
//                         size="lg"
//                         color="black"
//                         borderRadius="full"
//                         onClick={() => {
//                             setCollectionId('pcol_01HRVF8HCVY8B00RF5S54THTPC')
//                         }}
//                     >
//                         <Image
//                             className="mr-2"
//                             src={fire}
//                             alt={'Img of a fire'}
//                             width={22}
//                             height={22}
//                         />
//                         Best Sellers
//                     </Button>
//                     <Button
//                         fontWeight="italic"
//                         bg="black"
//                         size="lg"
//                         color="white"
//                         borderRadius="full"
//                         onClick={() => {
//                             setCollectionId('pcol_01HSGAM4918EX0DETKY6E662WT')
//                         }}
//                     >
//                         <Image
//                             className="mr-2"
//                             src={gift}
//                             alt={'Img of a gift'}
//                             width={22}
//                             height={22}
//                         />
//                         Gift Cards
//                     </Button>
//                     <Button
//                         fontWeight="italic"
//                         bg="black"
//                         size="lg"
//                         color="white"
//                         borderRadius="full"
//                         onClick={() => {
//                             setCollectionId('pcol_01HSGAMXDJD725MR3VSW631SN2')
//                         }}
//                     >
//                         <Image
//                             className="mr-2"
//                             src={game}
//                             alt={'Img of a game'}
//                             width={22}
//                             height={22}
//                         />
//                         Games
//                     </Button>
//                     <Button
//                         fontWeight="italic"
//                         bg="black"
//                         size="lg"
//                         color="white"
//                         borderRadius="full"
//                     >
//                         <Image
//                             className="mr-2"
//                             src={laptop}
//                             alt={'Img of a laptop'}
//                             width={22}
//                             height={22}
//                         />
//                         Electronics
//                     </Button>
//                     <Button
//                         fontWeight="italic"
//                         bg="black"
//                         size="lg"
//                         color="white"
//                         borderRadius="full"
//                     >
//                         <Image
//                             className="mr-2"
//                             src={collections}
//                             alt={'Img of a collections'}
//                             width={22}
//                             height={22}
//                         />
//                         Collectible
//                     </Button>
//                 </HStack>
//                 <ProductCollections collectionId={collectionId} />
//             </Box>
//         </Flex>
//     )
// }
//
// export default RecommendedItems
