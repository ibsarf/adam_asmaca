import {useState} from 'react';
import {randomWord} from './word/words.js';
import './Hangman.css';
import img0 from './image/0.jpg';
import img1 from './image/1.jpg';
import img2 from './image/2.jpg';
import img3 from './image/3.jpg';
import img4 from './image/4.jpg';
import img5 from './image/5.jpg';
import img6 from './image/6.jpg';

function Hangman() {
    const images = [img0, img1, img2, img3, img4, img5, img6];
    const maxWrong = 6;
    const [nWrong, setNWrong] = useState(0);
    const [guessed, setGuessed] = useState([]);
    const [answer, setAnswer] = useState('tabak');
    // console.log(nWrong);
    // console.log(guessed);

    const handleGuess = (e) => {
        let ltr = e.target.value;
        // console.log(ltr);
        setGuessed([...guessed, ltr]);
        setNWrong(nWrong + (answer.includes(ltr) ? 0 : 1));
    };

    const guessedWord = () => {
        return answer.split('').map((ltr) => (guessed.includes(ltr) ? ltr : '_'));
    };

    const generateButtons = () => {
        return 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
            <button
                key={letter}
                value={letter}
                onClick={handleGuess}>
                {letter}
            </button>
        ));
    };

    const restart = () => {
        setNWrong(0);
        setGuessed([]);
        setAnswer(randomWord);
    };
    let altText = `Tahmin sayacı, ${nWrong}/${maxWrong}`;
    let gameOver = nWrong >= maxWrong;
    let isWinner = guessedWord().join('') === answer;
    let gameState = generateButtons();
    if (gameOver) gameState = 'Üzgünüm Adam İdam Edildi 😔';
    if (isWinner) gameState = 'Tebrikler Diğer Kelimeye Ne Dersin';

    return (
        <div className='Hangman'>
            <h1>Adam Asmaca Oyunu</h1>
            <img
                src={images[nWrong]}
                alt={altText}
            />
            <p className='Hangman-wrong'>Tahmin Sayacı: {nWrong} </p>
            <p className='Hangman-word'>{!gameOver ? guessedWord() : answer}</p>
            <p className='Hangman-btns'>{gameState}</p>
            <button
                id='Hangman-restart'
                onClick={restart}>
                Yeni Kelime Al !
            </button>
        </div>
    );
}

export default Hangman;
