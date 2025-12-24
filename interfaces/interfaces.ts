
export interface IEventFiltersProps {
	selectedCategory: string;
	setSelectedCategory: (category: string) => void;
	location: string;
	setLocation: (location: string) => void;
	date: string;
	setDate: (date: string) => void;
	onClear: () => void;
}

export interface IEvent {
	id: string;
	title: string;
	description: string;
	date: string;
	time: string;
	location: string;
	price: number;
	image: string;
	category: string;
	isFeatured?: boolean;
}