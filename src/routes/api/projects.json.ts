import fetchProjectData from '../../utils/fetchProjectData';

export const get = async () => {
	return {
		body: await fetchProjectData()
	};
};
