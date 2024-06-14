import create from 'zustand';

// Define the state and associated actions in an interface
interface StoreState {
    categorySelect: string | null;
    currencySelect: string | null;
    reviewStarsSelect: string | null;
    setCategorySelect: (item: string | null) => void;
    setCurrencySelect: (item: string | null) => void;
    setReviewStarsSelect: (stars: string | null) => void;
}

// Create the Zustand store
const useStorePage = create<StoreState>((set) => ({
    categorySelect: null,
    currencySelect: null,
    reviewStarsSelect: null,
    setCurrencySelect: (item: string | null) => set({ currencySelect: item }),
    setCategorySelect: (item: string | null) => set({ categorySelect: item }),
    setReviewStarsSelect: (stars: string | null) =>
        set({ reviewStarsSelect: stars }),
}));

export default useStorePage;