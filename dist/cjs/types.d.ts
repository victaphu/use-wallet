import { AbstractConnector } from '@web3-react/abstract-connector';
declare type Currency = {
    name: string;
    symbol: string;
    decimals: number;
};
export declare type ChainInformation = {
    id: number;
    nativeCurrency: Currency;
    type: string;
    fullName: string;
    shortName: string;
    explorerUrl?: string;
};
export declare type chainNameOnly = {
    id: number;
    type: string;
};
export declare type AccountType = 'contract' | 'normal';
export declare type Status = 'connected' | 'disconnected' | 'connecting' | 'error';
export declare type Account = string;
export declare type Balance = string;
export declare type Provider = {
    id: string;
    name: string;
    type: string;
    image: string;
    strings: any;
};
export declare type Wallet = {
    account: Account | null;
    balance: string;
    chainId: number | undefined;
    connect: (connectorId: string) => Promise<void>;
    connector: string | null;
    connectors: object;
    error: Error | null;
    ethereum?: any;
    getBlockNumber?: () => number | null;
    isConnected: () => boolean;
    networkName: string | null;
    reset: () => void;
    status: Status;
    type: AccountType | null;
};
declare type EthereumProviderEip1193 = {
    request: (args: {
        method: string;
        params?: unknown[] | object;
    }) => Promise<unknown>;
};
declare type EthereumProviderSend = {
    send: (method: string, params: string[]) => Promise<unknown>;
};
declare type EthereumProviderSendAsync = {
    sendAsync: (params: {
        method: string;
        params: string[];
        from: string;
        jsonrpc: '2.0';
        id: number;
    }, callback: (err: Error, result: unknown) => void) => void;
    selectedAddress: string;
};
export declare type EthereumProvider = EthereumProviderEip1193 & EthereumProviderSend & EthereumProviderSendAsync;
export declare type ConnectorInit = () => Promise<Connector>;
export declare type Connector = {
    web3ReactConnector: (params: any) => AbstractConnector;
    handleActivationError?: (error: Error) => Error | null;
};
export declare type ConnectorConfig = {};
export {};
