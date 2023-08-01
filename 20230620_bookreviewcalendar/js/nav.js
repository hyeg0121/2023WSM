// alert("딱히 없다.");
// console.log("저도 없어요");

function sayHello(){
    alert("안녕");
}

// sayHello();

// 1. HTML -> JS
// 햄버거 메뉴 -> navToggleDiv
// 햄버거 메뉴의 아이콘 -> navToggleI
// .nav-list -> navListUl
const navToggleDiv = document.getElementById("nav_toggle");
const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];
// 2. Event Handling
nav_toggle.onclick = () => {
    //  toggle(): 있으면 빼고, 없으면 추가
    // 햄버거 메뉴 클릭하면, 햄버거 메뉴 i를 <-> x로 bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");

    // 햄버거 메뉴 클릭하면, .nav-list에 .show-menu 보여주기 <-> 안보여주기
    navListUl.classList.toggle("show-menu");
    
};

// nav_toggle.onclick = sayHello; // 호출 X, 정의만 해야 함
// alert 이 return 하는 값을 onclick 에 넣는 것
// 시험 문제

// nav_toggle.onclick = () => {
//     alert("안녕");
// };

// nav_toggle.onclick = alert("안녕"); // 시험문제 -> 바로 실행 O
// nav_toggle.onclick = () => alert("안녕"); // 시험문제 -> 바로 실행 X


//------------------------------
// HTML -> JS
// id
// const navToggleDiv1 = document.getElementById("nav-toggle");
// const navToggleDiv2 = nav_toggle; // JS 변수 규칙을 지켜야 함: 언더바로 공백 표시

// class
// const navToggleDiv = document.getElementsByClassName("nav-toggle")[0];

// tag
// const navToggleDiv = document.getElementsByTagName("div")[0];

// querySelector, querySelectorAll
// const navToggleDiv = document.querySelector("#nav_toggle");
// const navToggleDiv = document.querySelectorAll(".nav-toggle")[0];
// const navToggleDiv = document.querySelectorAll("div")[0];