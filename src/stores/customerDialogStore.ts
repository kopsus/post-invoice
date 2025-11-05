import { create } from "zustand";

interface CustomerDialogState {
  isCustomerDialogOpen: boolean;
  openCustomerDialog: () => void;
  closeCustomerDialog: () => void;
}

export const useCustomerDialogStore = create<CustomerDialogState>((set) => ({
  isCustomerDialogOpen: false,
  openCustomerDialog: () => set({ isCustomerDialogOpen: true }),
  closeCustomerDialog: () => set({ isCustomerDialogOpen: false }),
}));
