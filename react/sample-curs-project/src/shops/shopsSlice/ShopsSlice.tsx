import { createSlice } from "@reduxjs/toolkit";

import { Shops } from "../types";

const initialState: Shops = {
	id: "",
	img: "",
	name: "",
};

const shopsSlice = createSlice({
	name: "",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
	},
});

export const {} = shopsSlice.actions;
