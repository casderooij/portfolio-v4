import weekData from '../src/data/weeks.js';

export default function mdsvexLinkWeekToProject() {
	return function transformer(_, vFile) {
		const slug = vFile.filename.split('/').reverse()[1].split('.')[0];

		const weeks = weekData.filter((week) => week.blocks.some((block) => block.project === slug));

		if (!vFile.data.fm) vFile.data.fm = {};
		if (!vFile.data.fm.slug) vFile.data.fm.slug = slug;
		if (!vFile.data.fm.weeks) vFile.data.fm.weeks = weeks;
	};
}
