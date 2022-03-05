// prettier-ignore
/** The nested primary validator info within a bank node's config. */export type PrimaryValidatorInfo = {account_number:string;ip_address:string;node_identifier:string;port:number;protocol:string;version:string;default_transaction_fee:number;root_account_file:string;root_account_file_hash:string;seed_block_identifier:string;daily_confirmation_rate:number;trust:string};/** The config of a bank node. */export type BankConfig = {primary_validator:PrimaryValidatorInfo;account_number:string;ip_address:string;node_identifier:string;port:number;protocol:string;version:string;default_transaction_fee:number;node_type:string};/** The config of a primary validator node. */export type PrimaryValidatorConfig = {account_number:string;ip_address:string;/** The public key associated with the primary validator node on the network. */node_identifier:string;port:number;protocol:string;version:string;default_transaction_fee:number;root_account_file:string;root_account_file_hash:string;seed_block_identifier:string;daily_confirmation_rate:number;node_type:string};