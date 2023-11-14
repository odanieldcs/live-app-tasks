import React, { createContext, useContext, useState } from 'react';
import { TaskType, StateType, TaskAppContextType } from './TaskAppContextTypes';

const MyAppContext = createContext({} as TaskAppContextType);

export const MyAppProvider = ({ children }: { children: React.ReactNode }) => {
	const initialState: StateType = {
		tasks: [],
		activeFilter: '',
		activeCategory: '',
	};

	const [state, setState] = useState(initialState);

	const addTask = (task: TaskType) => {
		setState((prevState) => ({
			...prevState,
			tasks: [...prevState.tasks, task],
		}));
	};

	const updateTask = (id: string, updatedTask: TaskType) => {
		setState((prevState) => ({
			...prevState,
			tasks: prevState.tasks.map((task) =>
				task.id === id ? updatedTask : task
			),
		}));
	};

	const updateActiveCategory = (categoryActive: string) => {
		setState({ ...state, activeCategory: categoryActive });
	};

	const updateActiveFilter = (filterActive: string) => {
		setState({ ...state, activeFilter: filterActive });
	};

	const appContext = {
		state,
		addTask,
		updateTask,
		updateActiveCategory,
		updateActiveFilter,
	};

	return (
		<MyAppContext.Provider value={appContext}>{children}</MyAppContext.Provider>
	);
};

export const useMyAppContext = () => useContext(MyAppContext);
