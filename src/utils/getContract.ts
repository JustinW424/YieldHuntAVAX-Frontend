/* eslint-disable import/prefer-default-export */
import Web3 from 'web3';

// import { GemContract, HunterContract, BarnContract, TraitContract } from '../contracts';
import contractGEMToken from '../contracts/GEMABI.json';
import contractBarn from '../contracts/BARNABI.json';
import contractHunter from '../contracts/HUNTERABI.json';
import contractTrait from '../contracts/TraitABI.json';
import { getAddresses } from './constants';
import { DEFAULT_NETWORK } from './blockchain';

export const getContractHunter = async (connector: any) => {
  if (!connector) throw Error('No connector found');
  const addresses = getAddresses(DEFAULT_NETWORK);

  const walletProvider = await connector.getProvider();
  const web3 = new Web3(walletProvider);
  const contractAbi: any = contractHunter.abi;
  return {
    contract: new web3.eth.Contract(contractAbi, addresses.HUNTER_ADDRESS ),
  };
};

export const getContractBarn = async (connector: any) => {
  if (!connector) throw Error('No connector found');
  const walletProvider = await connector.getProvider();
  const web3 = new Web3(walletProvider);
  const contractAbi: any = contractBarn.abi;

  const addresses = getAddresses(DEFAULT_NETWORK);

  return {
    contract: new web3.eth.Contract(contractAbi, addresses.BARN_ADDRESS),
  };
};

export const getContractGem = async (connector: any) => {
  if (!connector) throw Error('No connector found');
  const walletProvider = await connector.getProvider();
  const web3 = new Web3(walletProvider);
  const addresses = getAddresses(DEFAULT_NETWORK);
  const contractAbi: any = contractGEMToken.abi;

  return {
    contract: new web3.eth.Contract(contractAbi, addresses.GEM_ADDRESS),
  };
};

export const getContractTrait = async (connector: any) => {
  if (!connector) throw Error('No connector found');
  const walletProvider = await connector.getProvider();
  const web3 = new Web3(walletProvider);
  const contractAbi: any = contractTrait.abi;
  const addresses = getAddresses(DEFAULT_NETWORK);

  return {
    contract: new web3.eth.Contract(contractAbi, addresses.TRAIT_ADDRESS),
  };
};
