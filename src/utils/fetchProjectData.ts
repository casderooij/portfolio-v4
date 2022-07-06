import type { Project } from '$utils/types';

const fetchProjectData = async () => {
	const allProjectFiles = import.meta.glob('../data/_projects/**/index.md');
	const iterableProjectFiles = Object.entries(allProjectFiles);

	const allProjects: Project[] = await Promise.all(
		iterableProjectFiles.map(async ([_, resolver]) => {
			const { metadata } = await resolver();
			console.log(metadata);

			return {
				...metadata
			};
		})
	);

	return allProjects;
};

export default fetchProjectData;
