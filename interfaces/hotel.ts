export interface Hotel {
    id: string;
    name: string;
    avatar: string[];
    address: string;
    rating: number;
    description: string;
    website: string;
    contact: string;
    amenities: string;
    email: string;
    price: number;
}

export interface HotelProps {
    navigation: any;
    route: any;
}
