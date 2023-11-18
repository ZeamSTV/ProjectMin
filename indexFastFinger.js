const vietnameseWords = [
    'chào', 'bạn', 'hôm', 'nay', 'là', 'một', 'ngày', 'đẹp',
    'việt', 'nam', 'học', 'sinh', 'thông', 'minh', 'trí', 'tuệ'
    // Thêm các từ khác tùy ý
];

let textToType = generateRandomText();

const typingText = document.getElementById('typing-text');
const resultDiv = document.getElementById('result');
const timerDiv = document.getElementById('timer');
const wordListDiv = document.getElementById('word-list');
let startTime;

// Hiển thị danh sách từ
wordListDiv.textContent = `Word List: ${vietnameseWords.join(' ')}`;

typingText.addEventListener('input', checkTyping);

function checkTyping() {
    const typedText = typingText.value;
    const wordsTyped = typedText.split(' ').filter(word => word !== '');
    const expectedWords = textToType.split(' ');

    const correctWords = wordsTyped.filter((word, index) => word === expectedWords[index]);

    const accuracy = (correctWords.length / expectedWords.length) * 100;
    resultDiv.textContent = `Accuracy: ${accuracy.toFixed(2)}%`;

    if (typedText === textToType) {
        const endTime = new Date();
        const elapsedTime = (endTime - startTime) / 1000;
        timerDiv.textContent = `Time: ${elapsedTime.toFixed(2)} seconds`;
    }
}

function restartTest() {
    typingText.value = '';
    resultDiv.textContent = '';
    timerDiv.textContent = '';
    textToType = generateRandomText();
    typingText.focus();
    startTime = new Date();
}

function generateRandomText() {
    const shuffledWords = shuffleArray(vietnameseWords);
    return shuffledWords.join(' ');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

typingText.addEventListener('focus', () => {
    startTime = new Date();
});