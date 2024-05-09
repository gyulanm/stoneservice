let contentWrapper = document.querySelector('.content__wrapper');

contentWrapper.addEventListener("click", (e) => {
    console.log(e.target)
    const details = e.target.closest('.content__details');
    console.log(details)
    if (!details) { return; }
    const more = details.querySelector('.content__more');
    more.classList.toggle('content__more--hidden');
});
