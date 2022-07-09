export type Project = {
	title: string;
	slug: string;
	weeks: Week[];
};

export type Image = {
	src: string;
	alt: string;
};

export type PositionedBlock = Block & {
	row: number;
	column?: string;
	project: Project;
};

export type Block = {
	projectSlug?: string;
	days: number[];
	images?: Image[];
	tags?: string[];
};

export type Week = {
	number: number;
	year: number;
	blocks: PositionedBlock[];
};
