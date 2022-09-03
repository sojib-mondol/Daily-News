// for getting all categories 
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(response => response.json())
    .then(data => displayCategory(data.data.news_category));
}

// display all news categories
const displayCategory = (categories) => {
    const newsCategoryField = document.getElementById('news-catagory-field')
    categories.forEach(element => {
        //console.log(element);
        const newsCategoryNamesDiv = document.createElement('div');
        newsCategoryNamesDiv.innerHTML = ` 
           <button onclick="getNewsId('${element.category_id}')" type="button" class="btn-style btn-hover"><h6>${element.category_name}</h6></button> 
       ` 
       newsCategoryField.appendChild(newsCategoryNamesDiv);
    });
}

loadCategory();


// getting category ID 
const getNewsId = (news_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${news_id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayNewsDetail(data.data))
}

// desplaying the news
const displayNewsDetail = (newsArray) =>{
    displayTotalNews(newsArray); // this is for total number of news
    
    const displayNewsFiled = document.getElementById('display-news-field');
    
    newsArray.forEach(news =>{
        console.log(news);
    })

}