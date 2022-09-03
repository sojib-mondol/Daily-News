
// for displaying total number of news
const displayTotalNews = (newsArray) => {
    const totalNews = newsArray.length;
    const totalNewsField = document.getElementById('total-news-field');
    totalNewsField.innerHTML = '';
    const totalNewsDiv = document.createElement('div');
    totalNewsDiv.innerHTML = `
        <h6 class='bg-light p-3 rounded'>${newsArray.length} items found for category Entertainment</h6>
    `;
    totalNewsField.appendChild(totalNewsDiv);
}

// for spinner
const spinnerField = document.getElementById('spinner-field');
const spinner = isTrue => {
    if(isTrue) {
        spinnerField.classList.remove('d-none');
    }else {
        spinnerField.classList.add('d-none');
    }
}