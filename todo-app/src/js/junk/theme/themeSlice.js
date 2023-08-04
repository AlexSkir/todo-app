import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const themeAdapter = createEntityAdapter();

const initialState = themeAdapter.getInitialState({
  status: 'idle',
  entities: {
    0: { id: 0, text: 'Learn React', completed: true },
    1: { id: 1, text: 'Learn Redux', completed: false },
    2: { id: 2, text: 'Build something fun!', completed: false },
  },
});

function nextTodoId(todos) {
  const maxId = Object.values(todos.entities).reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

// Thunk functions
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  // For real thunk function:
  // const response = await client.get('/fakeApi/todos');
  // return response.todos;
  return Object.values(initialState.entities);
});

export const saveNewTodo = createAsyncThunk('todos/saveNewTodo', async (text, { getState }) => {
  const initialTodo = { text };
  // For real thunk function:
  // const response = await client.post('/fakeApi/todos', { todo: initialTodo });
  // return response.todo;
  const { todos } = getState();
  const todo = {
    id: nextTodoId(todos),
    text,
    completed: false,
  };
  return todo;
});

// createSlice uses createAction and createReducer, so you may safely "mutate" immutable updates
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },
    todoDeleted: themeAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        themeAdapter.setAll(state, action.payload);
        state.status = 'idle';
      })
      .addCase(saveNewTodo.fulfilled, themeAdapter.addOne);
  },
});

export const { todoDeleted, todoToggled } = todosSlice.actions;

export default todosSlice.reducer;

// Selectors
export const { selectAll: selectTodos, selectById: selectTodoById } = themeAdapter.getSelectors(
  (state) => state.todos,
);

// Memoized selectors
export const selectTodoIds = createSelector(
  // First, pass one or more "input selector" functions:
  selectTodos,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  (todos) => todos.map((todo) => todo.id),
);
