export interface Hotel {
    id: string;
    name: string;
    avatar: string[];
    address: string;
    rating: number;
    description: string;
    website: string;
    contact: string;
    email: string;
    price: number;
    type: string;
}

export interface HotelProps {
    navigation: any;
    route: any;
}
