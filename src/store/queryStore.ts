import { create } from 'zustand';

interface QueryState {
    query: string;
    updateQuery: (newQuery: string) => void
}

export const useQueryStore = create<QueryState>((set) => ({
    query: 'marvel',
    updateQuery: (newQuery: string) => set(() => ({
        query: newQuery,
    })),
}));