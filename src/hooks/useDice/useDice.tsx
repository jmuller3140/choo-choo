import create from 'zustand';

const useDiceStore = create((set) => ({
  diceMode: 'Classic',
  changeDiceMode: () => set((state) => {
    const newMode = state.diceMode === 'Classic' ? 'Modern' : 'Classic'
    return {
      diceMode: newMode
    }
  }),
}))

export default useDiceStore;