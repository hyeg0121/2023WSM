// // URL book에 해당하는 parameter 값 읽어오기 
// const bookParam = new URL(location.href).searchParams.get('book');
// console.log(`book : ${bookParam}`);

// // book 값 (string) -> bookId(number) 변환하자
// const bookId = Number(bookParam);
// console.log(bookId, typeof bookId);

// // books를 돌면서 book숫자와 같은 id값의 책을 가져오기
// const book = books.filter(item => item.id === bookId)[0]; 
// console.log(book);

// // 제목 보여주기
// let title = book.title;
// const titleLabel = document.getElementsByClassName('title')[1];
// console.log(book.title);
// titleLabel.innerHTML = book.title;

/* 수업 코드 */
// URL book에 해당하는 parameter 값 읽어오기 
let url = new URL(location.href); // URL 인스턴스 생성
let book = url.searchParams.get('book');
// book이 null이면 책장으로 가자 
if(book === null) {
    window.open('index.html', '_top');
}

// book 값 (string) -> bookId(number) 변환하자
let bookId = Number(book); // 또는 parseInt(book);
let bookData;

// books를 돌면서 book숫자와 같은 id값의 책을 가져오기
for(let bookOne of books){
    if(bookId === bookOne.id) {
        bookData = bookOne;
        break;
    }
}

// 제목 보여주기
let title = bookData.title;
let author = bookData.author;
let publisher  = bookData.publisher;
let bookImage = bookData.img;
console.log(title, author, publisher, bookImage);

// HTML 요소 -> js 변수
const titleDiv = document.getElementsByClassName('title')[1];
titleDiv.innerHTML = title;
// titleDiv에 title 속성에 값으로 title을 넣자
// titleDiv.title = title;
titleDiv.setAttribute('title', title);

const authorDiv = document.getElementsByClassName('author')[1];
authorDiv.innerHTML = author;

const publisherDiv = document.getElementsByClassName('publisher')[1];
publisherDiv.innerHTML = publisher;

const bookImageDiv = document.getElementsByClassName('book-image')[0];
console.log(bookImageDiv);
// bookImageDiv.style.backgroundImage = `url("${bookImage}")`;
// bookImageDiv.style.backgroundSize = 'contain';
bookImageDiv.innerHTML = `<img src="${bookImage}" />`;

// 읽은 날짜: 임시로 오늘의 날짜 표시하자

// 오늘의 날짜 구하자
let now = new Date();

let year =  now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();

// 사람이 알아보는 형식으로 바꾸자
let dateString = `${year}년 ${month}월 ${date}일`;
console.log(dateString);

// HTML -> JS
const readDateDiv = document.getElementsByClassName('read-date')[1];
readDateDiv.innerHTML = dateString;
// 오늘의 날짜 값 넣자