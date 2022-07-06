const fetchProjectData = async () => {
	const allProjectFiles = import.meta.glob('../data/_projects/**/index.md');
	const iterableProjectFiles = Object.entries(allProjectFiles);

	const allProjects = await Promise.all(
		iterableProjectFiles.map(async ([_, resolver]) => {
			const { metadata } = await resolver();

			return {
				meta: metadata
			};
		})
	);

	return allProjects;
};

export default fetchProjectData;
