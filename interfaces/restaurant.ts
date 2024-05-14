export interface Restaurant {
    id: string;
    name: string;
    avatar: string[];
    address: string;
    ratings: number;
    food: string[];
    website: string;
    contact: string;
    price: number;
    timings: number;
    type: string;
}

export interface RestaurantProps {
    navigation: any;
    route: any;
}