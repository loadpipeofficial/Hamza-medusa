import create from 'zustand';

// Define the state and associated actions in an interface
interface StoreState {
    categorySelect: string | null;
    currencySelect: string | null;
    setCategorySelect: (item: string | null) => void;
    setCurrencySelect: (item: string | null) => void;
}

// Create the Zustand store
const useStorePage = create<StoreState>((set) => ({
    categorySelect: null,
    currencySelect: null,
    setCurrencySelect: (item: string | null) => set({ categorySelect: item }),
    setCategorySelect: (item: string | null) => set({ categorySelect: item }),
}));

export default useStorePage;
