import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todos/todosSlice';
// import themeSlice from './theme/themeSlice';

let preloadedState;
const persistedTodosString = localStorage.getItem('todos');

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  };
}

const includeMeaningOfLife = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers);
    function newGetState() {
      return {
        ...store.getState(),
        meaningOfLife: 42,
      };
    }
    return { ...store, getState: newGetState };
  };
};

const exampleMiddleware = (storeAPI) => (next) => (action) => {
  // Do anything here: pass the action onwards with next(action),
  // or restart the pipeline with storeAPI.dispatch(action)
  console.log('state before', storeAPI.getState());
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
};

const delayedActionMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === 'todos/fetchTodos/fulfilled') {
    setTimeout(() => {
      next(action);
    }, 2000);
    return;
  }
  next(action);
};

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exampleMiddleware).concat(delayedActionMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  enhancers: [includeMeaningOfLife],
});

export default store;
