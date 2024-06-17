import create from 'zustand';

// Define the state and associated actions in an interface
interface ProductPreview {
    productData: Record<string, any>;
    setProductData: (data: Record<string, any>) => void;
}

// Create the Zustand store
const useProductPreview = create<ProductPreview>((set) => ({
    productData: {}, // Initial state as an empty object
    setProductData: (data) => set({ productData: data }), // Method to update the state
}));

export default useProductPreview;
