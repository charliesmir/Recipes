import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Store } from '../types';

export const useStore = create<Store>()(
    persist((set, get) => ({
        recipes: [],
        addRecipe: () => {
            const newRecipe = {
                id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
                title: "",
                ingredients: [],
                instructions: null,
                isActive: false,
            };
            set({ recipes: [...get().recipes, newRecipe] });
            return newRecipe.id;
        }
    }),
     { 
        name: 'store', 
        storage:createJSONStorage(() => AsyncStorage), 
        version: 1, 
        migrate: (persistedState, version) => {
            if (version === 0) {
            }
        return persistedState
    },}))
;