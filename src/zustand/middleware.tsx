import { StateStorage } from '@/zustand/middleware';

export const zustandStore: StateStorage = {
    setItem: (name, value) => {
        localStorage.setItem(name, value);
    },
    getItem: (name) => {
        return localStorage.getItem(name) ?? "";
    },
    removeItem: (name) => {
        localStorage.removeItem(name);
    },
};
