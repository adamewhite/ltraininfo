import data from '../news.json';

const numStories = data.length;

test(`number of stories`, () => {
	expect(numStories).toBeGreaterThan(10);
});