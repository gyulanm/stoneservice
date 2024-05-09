let nextButton = document.querySelector('.story__arrow--next');
let prevButton = document.querySelector('.story__arrow--back');
let cards = document.querySelectorAll('.story__card');
let cardsWrapper = cards[0].parentElement;
const lastCardIndex = cards.length -1;
let leftCardIndex = 0;

nextButton.addEventListener("click", ()=>{
    let hiddenCardIndex;

    if (leftCardIndex+2>lastCardIndex) {
        hiddenCardIndex = leftCardIndex +2 - cards.length;
    } else {
        hiddenCardIndex = leftCardIndex +2;
    }

    let leftCard = cards[leftCardIndex];
    let rightCard = cards[hiddenCardIndex];
    leftCard.classList.toggle("hidden");
    rightCard.classList.toggle("hidden");

    cardsWrapper.removeChild(leftCard);
    cardsWrapper.insertAdjacentElement('beforeend', leftCard);

    if (leftCardIndex === lastCardIndex) {
        leftCardIndex = 0;
    } else {
        leftCardIndex++;
    }
});

prevButton.addEventListener("click", ()=>{
    let leftHiddenCardIndex;
    let rightHiddenCardIndex;

    if (leftCardIndex === 0) {
        leftHiddenCardIndex = lastCardIndex;
    } else {
        leftHiddenCardIndex = leftCardIndex - 1;
    }
    if (leftCardIndex+1>lastCardIndex) {
        rightHiddenCardIndex = leftCardIndex +1 - cards.length;
    } else {
        rightHiddenCardIndex = leftCardIndex +1;
    }


    let leftCard = cards[leftHiddenCardIndex];
    let rightCard = cards[rightHiddenCardIndex];
    leftCard.classList.toggle("hidden");
    rightCard.classList.toggle("hidden");
    cardsWrapper.removeChild(leftCard);
    cardsWrapper.insertAdjacentElement('afterbegin', leftCard);


    if (leftCardIndex === 0) {
        leftCardIndex = lastCardIndex;
    } else {
        leftCardIndex--;
    }
});
