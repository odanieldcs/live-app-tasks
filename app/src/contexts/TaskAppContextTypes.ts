export type TaskType = {
	id?: string;
	title: string;
	category?: string;
	isDone?: boolean;
	todoDate?: Date;
};

export type MyAppProviderType = {
	state: StateType;
	addTask: (task: TaskType) => void;
	updateTask: (id: string, updatedTask: TaskType) => void;
	updateActiveCategory: (category: string) => void;
	updateActiveFilter: (filter: string) => void;
	// getTasks: () => void;
};

export type StateType = {
	tasks: TaskType[];
	activeCategory: string;
	activeFilter: string;
};

export type TaskAppContextType = {
	state: StateType;
	addTask: (task: TaskType) => void;
	updateTask: (id: string, updatedTask: TaskType) => void;
	updateActiveCategory: (category: string) => void;
	updateActiveFilter: (filter: string) => void;
	// getTasks: () => void;
};
