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
```css
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
body {
    font-family: 'Nanum Myeongjo', serif;
}
```

# CSS 변수
1. 변수: ```--변수명: 값;```
3. 적용: ```var(변수명)```
