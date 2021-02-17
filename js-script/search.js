const search = document.querySelector('.js-search');

 search.onchange = () => {
    findItems();

    if(search.value != false)
    {
        search.style.backgroundImage = 'none';
    }
    else{
        search.style.backgroundImage = 'url(icon/search-icon.png)';
    }
} 

const findItems = () => {
    statusSearch = document.querySelector('.box-status-search');
    whereFind = document.querySelectorAll('.js-text-condition-one, .js-text-condition-two , .js-due-date, .js-name-task-text');
    whereFind.forEach((item) => { item.classList.remove("find-text"); });
    searchItems(search.value);
}

const searchItems= (searchValue) => {
    if (searchValue === ""){ return; } 
    let findOrNo = true;
    whereFind.forEach((item) => {
        if (item.innerText.includes(searchValue)){
            item.classList.add("find-text");
            findOrNo = false;
            item.scrollIntoView();
        }
    });
    if (findOrNo) { statusSearch.classList.add('dont-find'); return;}
    statusSearch.classList.remove('dont-find');
}