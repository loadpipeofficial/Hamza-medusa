import create from 'zustand';
import { Region } from '@medusajs/medusa'; // Import the Region type

// Define the state and associated actions in an interface
interface ProductPreview {
    productData: Record<string, any>;
    region: Region | null;
    countryCode: string | null;
    setProductData: (data: Record<string, any>) => void;
    setRegion: (region: Region) => void; // Use Region type for setter
    setCountryCode: (code: string) => void;
}

// Create the Zustand store
const useProductPreview = create<ProductPreview>((set) => ({
    productData: {}, // Initial state as an empty object
    region: null,
    countryCode: null,
    setProductData: (data) => set({ productData: data }), // Method to update the state
    setRegion: (region) => set({ region }), // Method to update the region
    setCountryCode: (code) => set({ countryCode: code }), // Method to update the country code
}));

export default useProductPreview;
