/* eslint-disable import/prefer-default-export */
import { InjectedConnector } from '@web3-react/injected-connector';
import { Networks } from './blockchain';

export const injected = new InjectedConnector({
  supportedChainIds: [Networks.AVAX, Networks.FUJI],
});
