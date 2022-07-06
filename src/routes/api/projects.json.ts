export const get = async () => {
	const allProjectFiles = import.meta.glob('../../data/_projects/**/index.md');
	const iterableProjectFiles = Object.entries(allProjectFiles);

	const allProjects = await Promise.all(
		iterableProjectFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();

			return {
				meta: metadata
			};
		})
	);

	return {
		body: allProjects
	};
};
