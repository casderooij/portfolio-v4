import data from './projects.json';

type Project = {
	slug: string;
	title: string;
	link?: string;
};

const projects = data.reduce(
	(acc: Record<string, Project>, cur) => ({ ...acc, [cur.slug]: cur }),
	{}
);

export default projects;
