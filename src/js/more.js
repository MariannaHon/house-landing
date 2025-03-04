import articles from './articles';

const moreItems = document.querySelectorAll('.more-container-list-item');
const moreBox = document.querySelector('.more-right');
const moreBtn = document.querySelector('.more-btn');
const moreList = document.querySelector('.more-container-list');

let articlesLoaded = 0;
const articlesPerClick = 3;
let allArticlesLoaded = false;

function loadArticles() {
  const remainingArticles = articles.length - articlesLoaded;
  const articlesToLoad = Math.min(articlesPerClick, remainingArticles);
  let lastArticle = null;

  for (let i = 0; i < articlesToLoad; i++) {
    const article = articles[articlesLoaded];
    articlesLoaded++;

    const listItem = document.createElement('li');
    listItem.classList.add('more-container-list-item');
    listItem.innerHTML = `
      <img class="more-container-list-item-img"
        srcset="${article.imgSrcSet}"
        src="${article.imgSrc}"
        width="200"
        height="148"
        alt="${article.imgAlt}"
      />
      <div class="more-container-list-item-box">
        <div class="more-container-list-item-box-top">
          <img class="orange"
            src="${article.authorImg}"
            width="32"
            height="32"
            alt="User"
          />
          <p class="more-name">${article.authorName}</p>
        </div>
        <h3 class="more-container-list-item-box-title">${article.title}</h3>
        <div class="more-container-list-item-box-bottom">
          <svg class="more-container-list-item-box-bottom-icon" width="24" height="24">
            <use href="/src/img/sprite.svg#icon-time"></use>
          </svg>
          <p class="more-container-list-item-box-bottom-text">${article.time}</p>
        </div>
      </div>
    `;

    moreList.appendChild(listItem);
    lastArticle = listItem;
  }

  addArticleClickListeners();

  if (lastArticle) {
    moreList.scrollTo({ top: moreList.scrollHeight, behavior: 'smooth' });
  }

  if (articlesLoaded >= articles.length) {
    moreBtn.textContent = 'Less articles';
    allArticlesLoaded = true;
  }
}

function toggleArticles() {
  if (allArticlesLoaded) {
    moreList.innerHTML = '';
    articlesLoaded = 0;
    allArticlesLoaded = false;
    moreBtn.textContent = 'More articles';
    loadArticles();
  } else {
    loadArticles();
  }
}

function addArticleClickListeners() {
  document.querySelectorAll('.more-container-list-item').forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.querySelector('.more-container-list-item-img').src;
      const authorImgSrc = item.querySelector('.orange').src;
      const authorName = item.querySelector('.more-name').textContent;
      const title = item.querySelector(
        '.more-container-list-item-box-title'
      ).textContent;
      const time = item.querySelector(
        '.more-container-list-item-box-bottom-text'
      ).textContent;
      moreBox.innerHTML = `<img class="more-right-img"
        src="${imgSrc}"
        width="580"
        height="280"
        alt="${title}"
      />
      <div>
        <div class="more-right-box">
          <img class="orange"
            src="${authorImgSrc}"
            width="32"
            height="32"
            alt="User"
          />
          <p class="more-name">${authorName}</p>
        </div>
        <h2 class="featured-list-item-title">${title}</h2>
        <p class="small-text more-text">Click an article to read more...</p>
        <div class="more-container-list-item-box-bottom">
          <svg class="more-container-list-item-box-bottom-icon" width="24" height="24">
            <use href="/src/img/sprite.svg#icon-time"></use>
          </svg>
          <p class="more-container-list-item-box-bottom-text">${time}</p>
        </div>
      </div>`;
    });
  });
}

moreBtn.addEventListener('click', toggleArticles);
loadArticles();
