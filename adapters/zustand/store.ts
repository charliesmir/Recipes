import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface Store {
test?: number}

export const useStore = create<Store>()(
    persist((set) => ({
        test: 10
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