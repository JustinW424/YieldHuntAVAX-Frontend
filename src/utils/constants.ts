/* eslint-disable no-underscore-dangle */
import { Networks } from "./blockchain";
export const __prod__ = process.env.NODE_ENV === 'production';

export const APPROVE_AMOUNT = '115792089237316195423570985008687907853269984665640564039457584007913129639935'; //(2^256 - 1 )
export const MIN_PRICE = 0.088;
export const MAX_PRICE = 0.42069;
export const PRICE_DECEREMENT_AMOUNT = 0.01;

const AVAX_MAINNET = {
  GEM_ADDRESS: "0x02e9c9efc1adEaF6c0Cf3824faf340dAC98b2DDA",
  TRAIT_ADDRESS: "0x6848B83a13692BA3Bb6394694c0c1bA15b2BEcD9",
  HUNTER_ADDRESS: "0x2E56282F39E4BeAd785164897C718Dc04176F84A",
  BARN_ADDRESS: "0xb945ef8B4f0239C46B5eeC36304C56972CE3Da44",
};

const AVAX_TESTNET = {
  GEM_ADDRESS: "0x7B7bdAbaa8a51aC6F3eF03122FA6A7D67da8a9E0",
  TRAIT_ADDRESS: "0xBD6c1dF2BDf1D9315F14697FD703CAd8cEE7236F",
  HUNTER_ADDRESS: "0xB7c1BE28b077ea4ca1fC8e82F4DaaD1E8415697E",
  BARN_ADDRESS: "0x74a3AddbB25246C8e7932012378d54756c971C70",
};
export const getAddresses = (networkID: number) => {
  if (networkID === Networks.AVAX) return AVAX_MAINNET;
  if (networkID === Networks.FUJI) return AVAX_TESTNET;

  throw Error("Network don't support");
};