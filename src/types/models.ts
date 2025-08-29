export type Vehicle = {
  id: string;
  name: string;        // e.g., "Ford Explorer"
  make: string;        // "Ford"
  model: string;       // "Explorer"
  year: number;        // 2023
  type: 'SUV' | 'Sedan' | 'Hatchback' | 'Truck' | 'Coupe' | 'Van';
  seats: number;
  doors: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Gasoline' | 'Diesel' | 'Hybrid' | 'Electric';
  pricePerDay: number; // 80
  images: string[];    // urls or local require()
  rating?: number;
};

export type RentalTerms = {
  minimumRentalPeriod: string; // "1 Day"
  mileageLimit: string;        // "200 Miles/Day"
};

// Mock data fixtures
export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Ford Explorer',
    make: 'Ford',
    model: 'Explorer',
    year: 2023,
    type: 'SUV',
    seats: 7,
    doors: 4,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePerDay: 85,
    images: ['https://example.com/ford-explorer.jpg'],
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Tesla Model 3',
    make: 'Tesla',
    model: 'Model 3',
    year: 2024,
    type: 'Sedan',
    seats: 5,
    doors: 4,
    transmission: 'Automatic',
    fuelType: 'Electric',
    pricePerDay: 120,
    images: ['https://example.com/tesla-model3.jpg'],
    rating: 4.9,
  },
];