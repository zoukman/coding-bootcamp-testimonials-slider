let womanImage = document.querySelector('#womanImage');
let manImage = document.querySelector('#manImage');
let womanText = document.querySelector('#womanText');
let manText = document.querySelector('#manText');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let counter = 0;

const displayWoman = () => {
    manImage.classList.add('hidden');
    manText.classList.add('hidden');
    womanImage.classList.remove('hidden');
    womanText.classList.remove('hidden');
}

const displayMan = () => {
    womanImage.classList.add('hidden');
    womanText.classList.add('hidden');
    manImage.classList.remove('hidden');
    manText.classList.remove('hidden');
}

next.addEventListener('click', () => {
    counter++;
    if (counter < 2) {
        displayMan(); 
        
    } else {
        displayWoman();
        counter = 0;
    }
    
});

prev.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        displayMan();
        counter = 1;
    } else {
        displayWoman();
    }
        
});
