import fs from 'fs';

const loadWords = () => {
	let word_list = ['learning', 'kindness', 'joy', 'kiet', 'good'];

	// un comment below for testing

	// const contents = fs.readFileSync('./words.txt', {
	// 	encoding: 'utf-8',
	// 	flag: 'r',
	// });

	// const words = contents.trim();
	// word_list = words.split(' ');

	return word_list;
};

const chooseWord = () => {
	// returns one random words from the string
	const wordList = loadWords();
	const secreatWord = getRandomWord(wordList);
	return secreatWord.toLowerCase();
};

function getRandomWord(wordsList) {
	return wordsList[Math.floor(Math.random() * wordsList.length)];
}

export default chooseWord;
