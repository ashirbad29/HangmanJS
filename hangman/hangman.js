import read_line_sync from 'readline-sync';
import choose_word from './words.js';
import images from './images.js';

/*
  Important Instruction
  * function and varialbe name snake_case -> is_prime
  * content varialbe upper case PI
*/

const is_word_guessed = (secreat_word, letters_guessed) => {
	/*
  secret_word: word guess by the user
    letters_guessed: list hold all the word guess by the user
    returns: 
      return True (if user guess the world correctly )
      return False (wrong selection)
  */

	return false;
};

// if you want to test this function please call function -> get_guessed_word("kindness", [k, n, d])
/**
 * @param {String} secreat_word
 * @param {Array} letters_guessed
 */
const get_guessed_word = (secret_word, letters_guessed) => {
	/*
    secret_word: word to guess by the user
    letters_guessed: list hold all the word guess by the user
    returns: 
      return string which contain all the right guessed characters
      Example :- 
      if secret_word -> "kindness" and letters_guessed = [k, n, s]
      return "k_n_n_ss"
  */
	let str = '';
	for (let char of secreat_word) {
		letters_guessed.includes(char) ? (str += char) : (str += '_');
	}

	return str;
};

/**
 * @param {Array} letters_guessed
 */
const get_available_letters = letters_guessed => {
	/*
   returns:
    it return string whcih contains all characters except guessed
  Example :-
      letters_guessed = ['e', 'a'] then    
      return sting is -> `bcdfghijklmnopqrstuvwxyz`
  */
	let str = '';
	for (let i = 0; i <= 25; i++) {
		let chr = String.fromCharCode(97 + i);
		if (letters_guessed.includes(chr)) continue;
		str += chr;
	}

	return str;
};

const hangman = secreat_word => {
	/*
  secret_word (string) : secret word to guessed by the user.

    Steps to start Hangman:

    * In the beginning of the game user will know about the total characters in the secret_word    

    * In each round user will guess one character 

    * After each character give feedback to the user
      * right or wrong

    * Display partial word guessed by the user and use underscore in place of not guess word    
  */

	console.log('Welcome to the game, Hangman!');
	console.log(`I am thinking of a word that is ${secreat_word.length} \n`);

	const letters_guessed = [];

	const available_letters = get_available_letters(letters_guessed);
	console.log(`Availalbe letters: ${available_letters}`);
	const guess = read_line_sync.question('Please guess a letter: ');
	const letter = guess.toLowerCase();

	if (secreat_word.includes(letter)) {
		letters_guessed.push(letter);
		console.log(
			`Good guess: ${get_guessed_word(secreat_word, letters_guessed)}`
		);

		if (is_word_guessed(secreat_word, letters_guessed)) {
			console.log('* * Congratulations, you won! * *');
		}
	} else {
		console.log(
			`Oops! That letter is not in my word: ${get_guessed_word(
				secret_word,
				letters_guessed
			)}`
		);
		letters_guessed.push(letter);
		console.log('');
	}
};

const secreat_word = choose_word();
// hangman(secreat_word);

// * testing stuff
// console.log(get_guessed_word('kindness', ['k', 'n', 's'])); // working
// console.log(get_available_letters(['a', 'b', 'z'])); // working
