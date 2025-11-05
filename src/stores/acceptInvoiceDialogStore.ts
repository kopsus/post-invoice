import { create } from "zustand";

interface AcceptInvoiceDialogState {
  isAcceptDialogOpen: boolean;
  invoiceId: string | null;
  openAcceptDialog: (invoiceId: string) => void;
  closeAcceptDialog: () => void;
}

export const useAcceptInvoiceDialogStore = create<AcceptInvoiceDialogState>(
  (set) => ({
    isAcceptDialogOpen: false,
    invoiceId: null,
    openAcceptDialog: (invoiceId) =>
      set({ isAcceptDialogOpen: true, invoiceId }),
    closeAcceptDialog: () =>
      set({ isAcceptDialogOpen: false, invoiceId: null }),
  })
);
