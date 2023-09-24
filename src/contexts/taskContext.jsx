import { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

const initialState = {
  tasks: [],
  isLoading: false,
  error: '',
};

function TaskProvider({ children }) {
  return <TaskContext.Provider value={{}}></TaskContext.Provider>;
}

function useTask() {
  const context = useContext(TaskContext);
  if (context === undefined)
    throw new Error('TaskContext was used outside the TaskProvider');
  return context;
}

export { TaskProvider, useTask };
