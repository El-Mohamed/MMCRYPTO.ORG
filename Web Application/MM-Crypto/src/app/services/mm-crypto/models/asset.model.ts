import { Founder } from './founder.model';

export interface Asset
{
    id: number;
    symbol: string;
    name: string;
    founder: Founder;
    website: string;
    fork?: Asset;
}
