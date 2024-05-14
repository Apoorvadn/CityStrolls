export interface destination {
    id: string;
    name: string;
    avatar: string[];
    address: string;
    timings: string;
    tags: string;
    entryFee: string[];
    distance: string;
}

export interface destinationProps {
    navigation: any;
    route: any;
}