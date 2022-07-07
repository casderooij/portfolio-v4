import fetchProjectData from '$utils/fetchProjectData';
import type { Block, PositionedBlock } from '$utils/types';

export const get = async () => {
	const weeks = await import('$data/weeks.js');

	const projects = await fetchProjectData();

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

	const checkOverlap = (a: PositionedBlock, b: PositionedBlock) => {
		return a.days.some((i: number) => b.days.includes(i)) && a.row === b.row;
	};

	const fitBlocks = (
		blocks: PositionedBlock[],
		fittedBlocks: PositionedBlock[] = [],
		index = 0
	): Block[] => {
		const overlap = fittedBlocks.some((a) => checkOverlap(a, blocks[index]));
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

	const fittedWeeks = weeks.default
		.sort((a, b) => b.number - a.number)
		.map((week) => ({
			blocks: week.blocks
				.map((block) => {
					const { column } = toColumnSpan(block.days);
					const project = projects.find((project) => project.slug === block.projectSlug);

					return {
						...block,
						row: 1,
						column,
						project
					};
				})
				.sort(sortProjectsWithImages),
			number: week.number
		}))
		.map((week) => ({ blocks: fitBlocks(week.blocks as PositionedBlock[]), number: week.number }));

	return {
		body: fittedWeeks
	};
};
