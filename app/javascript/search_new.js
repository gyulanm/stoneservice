let data;
const searchField = document.getElementById('search_field');
const catalogWrapper = document.querySelector('.catalog__wrapper.content__wrapper');

function searchArticles() {
    const query = searchField.value.toLowerCase();
    const words = query.split(' ');

    if (data) {
        const results = data.filter(article => {
            const title = article.title.toLowerCase();
            return words.every(word => title.includes(word));
        });

        // Получаем все существующие элементы в catalogWrapper
        const existingElements = Array.from(catalogWrapper.querySelectorAll('.cards__item'));

        // Удаляем элементы, которые больше не соответствуют условиям поиска
        existingElements.forEach(element => {
            const articleId = parseInt(element.dataset.id, 10);
            const matchingArticle = results.find(article => article.id === articleId);
            if (!matchingArticle) {
                catalogWrapper.removeChild(element);
            }
        });

        // Добавляем новые элементы
        results.forEach(article => {
            const existingElement = catalogWrapper.querySelector(`a[data-id="${article.id}"]`);
            if (!existingElement) {
                const cardItem = document.createElement('a');
                cardItem.classList.add('cards__item', 'card', 'card--long');
                cardItem.dataset.id = article.id;
                cardItem.innerHTML = `
                    <img class="card__img img__diana" src="${article.images}" alt="">
                    <h2 class="card__title">${article.title}</h2>
                    <p class="card__text">${article.card_text}</p>
                    <p class="author__text">Автор: ${article.author}</p>
                `;
                catalogWrapper.appendChild(cardItem);
            }
        });
    } else {
        console.error('Данные еще не загружены');
    }
}

fetch('/search.json')
    .then(response => response.json())
    .then(fetchedData => {
        data = fetchedData;
        searchArticles();
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });

searchField.addEventListener('input', searchArticles);