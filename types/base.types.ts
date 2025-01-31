export type WalletType={
    address:string;
}| null | undefined;

export type HeaderProps={
    className?:string;
    wallet:WalletType;
    logOut:()=>void;
}