const generateColor = document.querySelector('button');
const hashColor = document.querySelector('#color');
const copy = document.querySelector('span');
let randomCode = '';

const getColor = ()=>{
    const randomNumber = Math.floor(Math.random()*16777215);
    randomCode = "#"+randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    hashColor.textContent = randomCode;
    hashColor.style.backgroundColor = randomCode;
}

const showCopiedMessage = () => {
    const copiedMessage = document.createElement('div');
    copiedMessage.classList.add('copied-message');
    copiedMessage.textContent = "Copied!";
    copy.appendChild(copiedMessage);

    setTimeout(() => {
        copiedMessage.remove();
    }, 500);
};

generateColor.addEventListener('click', getColor);

copy.addEventListener('click', () => {
    if (randomCode) {
        navigator.clipboard.writeText(randomCode).then(() => {
            showCopiedMessage();
        });
    }
})

getColor();