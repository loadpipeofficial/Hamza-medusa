import create from 'zustand';

// Define the state and associated actions in an interface
interface StoreState {
    categorySelect: string | null;
    setCategorySelect: (item: string | null) => void;
}

// Create the Zustand store
const useStorePage = create<StoreState>((set) => ({
    categorySelect: null, // initial state for selected item
    setCategorySelect: (item: string | null) => set({ categorySelect: item }),
}));

export default useStorePage;
