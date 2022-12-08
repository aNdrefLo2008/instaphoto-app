import create from 'zustand'
import { persist } from 'zustand/middleware'

const useBookStore = (set: any) => ({
    user: null,
    addUser: (newUser: number ) => set({user: newUser}),
    removeUser: () => set({user: null}),
});

const useAuthStore = create((persist(useBookStore, {
    name: 'auth'
})))

export default useAuthStore;