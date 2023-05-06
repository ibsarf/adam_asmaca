var turkish_word = [
    'kalemlik',
    'tahta',
    'radyo',
    'sehpa',
    'tahta',
    'kilit',
    'rende',
    'makas',
    'dolap',
    'tepsi',
    'lamba',
    'rende',
    'kazak',
    'kumru',
    'geyik',
    'banyo',
    'biber',
    'gurur',
];
function randomWord() {
    return turkish_word[Math.floor(Math.random() * turkish_word.length)];
}
export {randomWord};
