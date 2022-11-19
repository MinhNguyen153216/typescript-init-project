import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  tempObj: any;
  tempArray: any[];
};

const initialState: InitialState = {
  tempObj: { a: "asd", b: "zxc" },
  tempArray: [
    { a: "asd", b: "zxc" },
    { c: "123", d: "456" },
  ],
};

const tempReducer = createSlice({
  name: "tempReducer",
  initialState,
  reducers: {},
});

export const {} = tempReducer.actions;

export default tempReducer.reducer;

// ------------------Thunk API---------------------
