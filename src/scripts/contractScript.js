import {ethers} from "ethers";

const {ethereum} = window;
const {createAlchemyWeb3} = require("@alch/alchemy-web3");
export const API_URL = 'https://polygon-mumbai.g.alchemy.com/v2/_auMmUFU92Xjq6_VXK0GvJ9KUIzcyN5-';
const contract = require("../artifacts/contracts/contracts.sol/Seller.json");
export const contractAddress = "0x1119cBe08d5C86f6cF8A9C501859cC93ad1d1aB9";
const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner()
export const contracts = new ethers.Contract(contractAddress, contract.abi, signer);
export const web3 = createAlchemyWeb3(API_URL);
