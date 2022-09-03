const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(response => response.json())
    .then(data => displayCategory(data.data.news_category));
}

const displayCategory = (categories) => {
    const newsCategoryField = document.getElementById('news-catagory-field')
    categories.forEach(element => {
        console.log(element);
        const newsCategoryNamesDiv = document.createElement('div');
        newsCategoryNamesDiv.innerHTML = ` 
           <button type="button" class="btn-style btn-hover">${element.category_name}</button> 
       ` 
       newsCategoryField.appendChild(newsCategoryNamesDiv);
    });
}

loadCategory();