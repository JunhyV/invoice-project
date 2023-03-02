import { createSlice } from "@reduxjs/toolkit";
import invoices from "../../utils/data.json";

const initialState = {
  invoices
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    saveInvoice: (state,action) => {},
    draftInvoice: (state,action) => {},
    deleteInvoice: (state,action) => {},
    editInvoice: (state,action) => {},
    markInvoice: (state,action) => {},
  },
});

export const invoiceReducer = invoiceSlice.reducer;
