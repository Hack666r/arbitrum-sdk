/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type { TypedEventFilter, TypedEvent, TypedListener } from './common'

interface ICustomTokenInterface extends ethers.utils.Interface {
  functions: {
    'balanceOf(address)': FunctionFragment
    'isArbitrumEnabled()': FunctionFragment
    'registerTokenOnL2(address,uint256,uint256,uint256,uint256,address)': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string
  encodeFunctionData(
    functionFragment: 'isArbitrumEnabled',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'registerTokenOnL2',
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish]
  ): string

  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'isArbitrumEnabled',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'registerTokenOnL2',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike
  ): Result

  events: {}
}

export class ICustomToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: ICustomTokenInterface

  functions: {
    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>

    isArbitrumEnabled(overrides?: CallOverrides): Promise<[number]>

    registerTokenOnL2(
      l2CustomTokenAddress: string,
      maxSubmissionCostForCustomBridge: BigNumberish,
      maxSubmissionCostForRouter: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      creditBackAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

  isArbitrumEnabled(overrides?: CallOverrides): Promise<number>

  registerTokenOnL2(
    l2CustomTokenAddress: string,
    maxSubmissionCostForCustomBridge: BigNumberish,
    maxSubmissionCostForRouter: BigNumberish,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    creditBackAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

    isArbitrumEnabled(overrides?: CallOverrides): Promise<number>

    registerTokenOnL2(
      l2CustomTokenAddress: string,
      maxSubmissionCostForCustomBridge: BigNumberish,
      maxSubmissionCostForRouter: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      creditBackAddress: string,
      overrides?: CallOverrides
    ): Promise<void>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>
  }

  filters: {}

  estimateGas: {
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

    isArbitrumEnabled(overrides?: CallOverrides): Promise<BigNumber>

    registerTokenOnL2(
      l2CustomTokenAddress: string,
      maxSubmissionCostForCustomBridge: BigNumberish,
      maxSubmissionCostForRouter: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      creditBackAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    isArbitrumEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>

    registerTokenOnL2(
      l2CustomTokenAddress: string,
      maxSubmissionCostForCustomBridge: BigNumberish,
      maxSubmissionCostForRouter: BigNumberish,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      creditBackAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
