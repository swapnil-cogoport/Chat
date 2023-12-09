/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tabs        : [],
};

export const tabviewSlice = createSlice({
	name     : 'tabs',
	initialState,
	reducers : {
		addChat: (state, action) => {
			state.tabs.push(action.payload);
		},
	},
});

export const { setLivewireActiveTabId, addLivewireActiveTab, removeLivewireTab } = tabviewSlice.actions;

export default tabviewSlice.reducer;
