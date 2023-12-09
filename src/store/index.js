import { configureStore } from '@reduxjs/toolkit';

import chathistoryReducer from './chathistory';
const store = configureStore({
	reducer: {
		chathistory    : chathistoryReducer,
	},
});

export default store;
