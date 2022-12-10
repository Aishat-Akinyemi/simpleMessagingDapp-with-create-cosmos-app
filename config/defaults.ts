import { assets, chains } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';

export const chainName = 'cudostestnet';
export const stakingDenom = 'cudos';
export const feeDenom = 'acudos';

// export const cw20ContractAddress = 'wasm1p7vmrhl3s0fyl0m9hk2hlm7uuxq84hztur63n8ryh85chh30vt6q89shcv'
export const messagingContractAddress = 'cudos1fuxfrnxcec6tyy37rrme04utqtw29wmpt0qz8266crdd5s0r9tvsmzg9s9'

export const chainassets: AssetList = assets.find(
    (chain) => chain.chain_name === chainName
) as AssetList;

export const coin: Asset = chainassets.assets.find(
    (asset) => asset.base === stakingDenom
) as Asset;

export const chainRpcEndpoint = chains.find(
    (chain) => chain.chain_name === chainName
)?.apis?.rpc?.at(1)?.address;  

