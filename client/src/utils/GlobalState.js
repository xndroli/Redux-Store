// import React, { createContext, useContext } from 'react';
// import { useStoreReducer } from './reducers';

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
// 	const [state, dispatch] = useStoreReducer({
// 		products: [],
// 		services: [],
// 		cart: [],
// 		cartOpen: false,
// 		categories: [],
// 		currentCategory: '',
// 	});

// 	return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
// 	return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
