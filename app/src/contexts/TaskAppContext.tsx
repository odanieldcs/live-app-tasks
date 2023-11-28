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

	const addTask = async (task: TaskType) => {
		setState((prevState) => ({
			...prevState,
			tasks: [...prevState.tasks, task],
		}));

		delete task.id;
		delete task.isDone;

		await fetch('/api/task', {
			method: 'POST',
			body: JSON.stringify(task),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};

	const getTasks = async () => {
		const res = await fetch('/api/task');

		const { tasks } = await res.json();

		setState((prevState) => ({
			...prevState,
			tasks,
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
		getTasks,
	};

	return (
		<MyAppContext.Provider value={appContext}>{children}</MyAppContext.Provider>
	);
};

export const useMyAppContext = () => useContext(MyAppContext);
