import { create } from 'zustand';
import { produce } from 'immer';

interface StoreState {
  openDropdown: boolean;
  setOpenDropdown: (openDropdown: boolean) => void;
  submenuId: number | null;
  setSubmenuId: (submenuId: number | null) => void;
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  openMobileMenu: boolean;
  setOpenMobileMenu: (openMobileMenu: boolean) => void;
  openTooltip: boolean;
  setOpenTooltip: (openTooltip: boolean) => void;
  tooltipMessage: string;
  setTooltipMessage: (tooltipMessage: string) => void;
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
  openModal: false,
  setOpenModal: value => {
    set(
      produce(state => {
        state.openModal = value;
      }),
    );
  },
  openMobileMenu: false,
  setOpenMobileMenu: value => {
    set(
      produce(state => {
        state.openMobileMenu = value;
      }),
    );
  },
  openTooltip: false,
  setOpenTooltip: value => {
    set(
      produce(state => {
        state.openTooltip = value;
      }),
    );
  },
  tooltipMessage: '',
  setTooltipMessage: value => {
    set(
      produce(state => {
        state.tooltipMessage = value;
      }),
    );
  },
}));
