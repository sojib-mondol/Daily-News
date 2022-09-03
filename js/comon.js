
// for displaying total number of news
const displayTotalNews = (newsArray) => {
    const totalNews = newsArray.length;
    const totalNewsField = document.getElementById('total-news-field');
    totalNewsField.innerHTML = '';
    const totalNewsDiv = document.createElement('div');
    totalNewsDiv.innerHTML = `
        <h6>${newsArray.length} items found for category Entertainment</h6>
    `;
    totalNewsField.appendChild(totalNewsDiv);
}