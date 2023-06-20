// book-item > img 태그의 src 속성 초기화 하기 

// HTML -> JS
const bookItems = document.getElementsByClassName("book-item");
const bookItem = bookItems[0];
let i = 0;
for(let bookItem of bookItems){
    // bookItems에서 하나씩 꺼내어 img 태그 가져오기
    const bookItemImg = bookItem.getElementsByTagName("img")[0];
    bookItemImg.src = books[i].img;
    i++;
}

