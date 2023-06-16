# 시멘틱 태그
1. ```<header>``` : 웹사이트의 헤더를 의미

# emet 약어
1. nav.nav.container : ```<nav class="nav container"></nav>```
2. ul*3 : ```<ul></ul><ul></ul><ul></ul>```
3. ul.nav-list>(li.nav-item>a.nav-link) : ```<ul class="nav-list"><li class="nav-item><a href="" class="nav-link"></a></li></ul>```
4. .nav-toggle : ```<div class="nav-toggle">```

# reset.css 의 필요성
1. 기본적으로 적용되는 style 을 없애지 않으면 의도와 다르게 디자인될 수 있음
- margin, ul, a
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
}

img {
    max-width: 100%;
    height: auto;
}
```

# css
1. ```box-sizing: border-box;``` : border까지 고려해서 크기 조정
2. ```box-sizing: content-box;``` : border가 아닌 content의 크기만고려

# webfont
1. 웹폰트는 웹사이트를 열었을 때 다운로드 하는 것이기 때문에 쓰지 않는 것은 import 하지 않는게 좋다
2. @import 
3. import는 css코드 맨 위에 있어야 한다.
```css
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
body {
    font-family: 'Nanum Myeongjo', serif;
}
```

# CSS 변수
1. 변수: ```--변수명: 값;```
3. 적용: ```var(변수명)```

# padding 
1. ```padding : [1] [2] [3] [4];``` : 1~4 순서대로 top, right, bottom, left
2. ```padding : [1] [2];``` : 1은 top, bottom, 2는 left, right

# position
1. ```position:  absolute;```: 절대값으로 위치 (부모가 relative면 부모의 절대값)

# HTML -> JS
1. id로 가져오기
```java script
const navToggleDiv1 = document.getElementById("nav-toggle");
const navToggleDiv2 = nav_toggle; // JS 변수 규칙을 지켜야 함: 언더바로 공백 표시
```
2. class로 가져오기
```java script
const navToggleDiv = document.getElementsByClassName("nav-toggle")[0];
```
3. tag로 가져오기
```java script
const navToggleDiv = document.getElementsByTagName("div")[0];
```
4. css 선택자로 가져오기
```java script
const navToggleDiv = document.querySelector("#nav_toggle");
const navToggleDiv = document.querySelectorAll(".nav-toggle")[0];
const navToggleDiv = document.querySelectorAll("div")[0];
```
5. 특정 요소 안에서 가져오기 -> document대신 요소로
```java script
const navToggleI = nav_toggle.getElementsByTagName("i")[0];
```

# event handling
1. 클릭했을 때
```java script
nav_toggle.onclick = sayHello; 
nav_toggle.onclick = () => {
    alert("안녕");
};
nav_toggle.onclick = () => alert("안녕");
```

# clss class 추가하기