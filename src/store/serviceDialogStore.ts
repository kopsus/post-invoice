import { create } from "zustand";

interface ServiceDialogState {
  isServiceDialogOpen: boolean;
  openServiceDialog: () => void;
  closeServiceDialog: () => void;
}

export const useServiceDialogStore = create<ServiceDialogState>((set) => ({
  isServiceDialogOpen: false,
  openServiceDialog: () => set({ isServiceDialogOpen: true }),
  closeServiceDialog: () => set({ isServiceDialogOpen: false }),
}));
