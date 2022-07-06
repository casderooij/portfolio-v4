import data from './weekData.js';
import projects from './projects';

console.log(JSON.stringify(data));

const toColumnSpan = (days: number[]) => {
	const startColumn = 8 - days[days.length - 1];
	const endColumn = 8 - days[0];
	const column = startColumn === endColumn ? `${startColumn}` : `${startColumn}/${endColumn + 1}`;
	const columnWidth = endColumn - startColumn + 1;
	return {
		column,
		columnWidth
	};
};

const sortProjectsWithImages = (a: Block, b: Block) => {
	const aHasImage = a.images;
	const bHasImage = b.images;
	if (aHasImage && !bHasImage) {
		return 1;
	} else if (bHasImage && !aHasImage) {
		return -1;
	} else {
		return 0;
	}
};

const checkOverlap = (a: Block, b: Block) => {
	return a.days.some((i) => b.days.includes(i)) && a.row === b.row;
};
const fitBlocks = (blocks: Block[], fittedBlocks: Block[] = [], index = 0): Block[] => {
	let overlap = fittedBlocks.some((a) => checkOverlap(a, blocks[index]));
	if (overlap) {
		blocks[index].row += 1;
		fitBlocks(blocks, fittedBlocks, index);
	} else {
		fittedBlocks.push(blocks[index]);
		if (index < blocks.length - 1) {
			fitBlocks(blocks, fittedBlocks, (index += 1));
		}
	}
	return fittedBlocks;
};

const weeks = data
	.sort((a, b) => b.number - a.number)
	.map((week) => ({
		blocks: week.blocks
			.map((block) => {
				const { column, columnWidth } = toColumnSpan(block.days);
				const project = block.project ? projects[block.project] : undefined;
				return {
					...block,
					row: 1,
					column,
					columnWidth,
					blockProject: project
				};
			})
			.sort(sortProjectsWithImages),
		number: week.number
	}))
	.map((week) => ({ blocks: fitBlocks(week.blocks), number: week.number }));

export default weeks;
