import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";
import car7 from "@/assets/car-7.jpg";
import car8 from "@/assets/car-8.jpg";

export interface Car {
  id: string;
  name: string;
  year: number;
  price: number;
  image: string;
  mileage: number;
  fuel: string;
  transmission: string;
  type: string;
  engine: string;
  horsepower: number;
  seats: number;
  rating: number;
  reviews: number;
  available: boolean;
  features: string[];
  location: string;
  description: string;
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Toyota Camry",
    year: 2023,
    price: 55000,
    image: car1,
    mileage: 20,
    fuel: "Petrol",
    transmission: "Automatic",
    type: "Sedan",
    engine: "2.5L 4-Cylinder",
    horsepower: 203,
    seats: 5,
    rating: 4.5,
    reviews: 128,
    available: true,
    features: ["Bluetooth", "Cruise Control", "Backup Camera", "Lane Assist"],
    location: "New York",
    description: "Reliable and fuel-efficient sedan perfect for daily commuting.",
  },
  {
    id: "2",
    name: "Mini Cooper",
    year: 2023,
    price: 135000,
    image: car2,
    mileage: 15,
    fuel: "Petrol",
    transmission: "Automatic",
    type: "Hatchback",
    engine: "2.0L Turbo",
    horsepower: 189,
    seats: 4,
    rating: 4.3,
    reviews: 95,
    available: true,
    features: ["Sport Mode", "Panoramic Roof", "Premium Audio", "Navigation"],
    location: "Los Angeles",
    description: "Fun and stylish compact car with premium features.",
  },
  {
    id: "3",
    name: "Honda CR-V",
    year: 2023,
    price: 53000,
    image: car3,
    mileage: 35,
    fuel: "Hybrid",
    transmission: "Automatic",
    type: "SUV",
    engine: "2.0L Hybrid",
    horsepower: 204,
    seats: 5,
    rating: 4.6,
    reviews: 210,
    available: true,
    features: ["AWD", "Apple CarPlay", "Heated Seats", "Adaptive Cruise"],
    location: "Chicago",
    description: "Versatile SUV with excellent fuel economy and spacious interior.",
  },
  {
    id: "4",
    name: "Tesla Model 3",
    year: 2023,
    price: 53000,
    image: car4,
    mileage: 0,
    fuel: "Electric",
    transmission: "Automatic",
    type: "Sedan",
    engine: "Electric Motor",
    horsepower: 283,
    seats: 5,
    rating: 4.7,
    reviews: 342,
    available: false,
    features: ["Autopilot", "Full Self-Driving", "Premium Interior", "Supercharging"],
    location: "San Francisco",
    description: "Cutting-edge electric sedan with impressive range and technology.",
  },
  {
    id: "5",
    name: "BMW 3 Series",
    year: 2023,
    price: 133000,
    image: car5,
    mileage: 30,
    fuel: "Petrol",
    transmission: "Automatic",
    type: "Sedan",
    engine: "2.0L Turbo",
    horsepower: 255,
    seats: 5,
    rating: 4.4,
    reviews: 178,
    available: true,
    features: ["Sport Package", "iDrive", "Leather Seats", "M Sport Brakes"],
    location: "Miami",
    description: "The ultimate driving machine, combining luxury with performance.",
  },
  {
    id: "6",
    name: "Jeep Wrangler",
    year: 2023,
    price: 150000,
    image: car6,
    mileage: 25,
    fuel: "Petrol",
    transmission: "Automatic",
    type: "SUV",
    engine: "3.6L V6",
    horsepower: 285,
    seats: 5,
    rating: 4.2,
    reviews: 156,
    available: true,
    features: ["4x4", "Removable Top", "Off-Road Package", "Trail Rated"],
    location: "Denver",
    description: "Iconic off-road SUV built for adventure and exploration.",
  },
  {
    id: "7",
    name: "Ford Mustang",
    year: 2023,
    price: 220000,
    image: car7,
    mileage: 20,
    fuel: "Petrol",
    transmission: "Manual",
    type: "Sports",
    engine: "5.0L V8",
    horsepower: 450,
    seats: 4,
    rating: 4.8,
    reviews: 267,
    available: true,
    features: ["Performance Package", "Active Exhaust", "MagneRide", "Recaro Seats"],
    location: "Dallas",
    description: "American muscle car icon with exhilarating V8 performance.",
  },
  {
    id: "8",
    name: "Mercedes C-Class",
    year: 2023,
    price: 350000,
    image: car8,
    mileage: 30,
    fuel: "Petrol",
    transmission: "Automatic",
    type: "Sedan",
    engine: "2.0L Turbo",
    horsepower: 255,
    seats: 5,
    rating: 4.6,
    reviews: 198,
    available: true,
    features: ["MBUX", "Burmester Audio", "Air Suspension", "360 Camera"],
    location: "Seattle",
    description: "Luxurious sedan offering the pinnacle of comfort and technology.",
  },
];
