import { create } from 'zustand';
import { produce } from 'immer';

interface StoreState {
  openDropdown: boolean;
  setOpenDropdown: (openDropdown: boolean) => void;
  submenuId: number | null;
  setSubmenuId: (submenuId: number | null) => void;
}

export const useStore = create<StoreState>(set => ({
  openDropdown: false,
  setOpenDropdown: value => {
    set(
      produce(state => {
        state.openDropdown = value;
      }),
    );
  },
  submenuId: null,
  setSubmenuId: value => {
    set(
      produce(state => {
        state.submenuId = value;
      }),
    );
  },
}));
