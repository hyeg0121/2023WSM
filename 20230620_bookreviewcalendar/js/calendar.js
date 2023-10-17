var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

// html 요소 가져오기
const monthDiv = document.getElementsByClassName('month')[0];
const datesContainerDiv = document.getElementsByClassName('dates')[0];

// < : 이전달
const leftDiv = document.getElementsByClassName('left')[0];
leftDiv.onclick = () => {
    month--;
    let prevMonth = new Date(year, month - 1);
    year = prevMonth.getFullYear();
    month = prevMonth.getMonth() + 1;
    setCalendar(year, month);
};

// > : 이후달
const rightDiv = document.getElementsByClassName('right')[0];
rightDiv.onclick = () => {
    month++;
    if (month == 13) {
        year++;
        month = 1;
    }
    setCalendar(year, month);
};


const setCalendar = (year, month) => {
    // 현재 월 제목에 표시
    monthDiv.innerHTML = `${month}월`;

    // 자식을 clear
    // datesContainerDiv.innerHTML = '';
    // while (datesContainerDiv.firstChild !== undefined) {
    //     datesContainerDiv.removeChild(datesContainerDiv.firstChild);
    // }
    datesContainerDiv.replaceChildren();
    
    // 해당 월의 마지막 날짜
    var thisMonthLastDate = new Date(year, month, 0).getDate();

    for (let date = 1; date <= thisMonthLastDate; date++) {
        let dateItemDiv = document.createElement('div');
        dateItemDiv.classList.add('date');
        dateItemDiv.classList.add('item');
        dateItemDiv.innerHTML = date;
        datesContainerDiv.appendChild(dateItemDiv);
    }

    // 1일을 해당 요일로 이동하자 
    let firstDateDiv = datesContainerDiv.querySelector('.date.item:nth-child(1)');

    // 1일의 요일 구하자
    var firstDateDay = new Date(year, month - 1, 1).getDay();   
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;
    
    // 토요일: 파란색 글자로
    //  let saturdayFirstDate = Math.abs(7 - firstDateDay);
    let saturdayFirstDate =  7 - firstDateDay;
    //  let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n + ${saturdayFirstDate})`);
    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n + ${saturdayFirstDate})`);
    for (let saturdayDiv of saturdayDivs) {
        saturdayDiv.style.color = 'blue';
    }

    // 일요일: 빨간색 글자로 
    // TODO: 일요일이 1일일 때에 색이 안바뀌는거 해결하기 
    // let sundayFirstDate = 6 + firstDateDay;
    let sundayFirstDate = (8 -  firstDateDay) % 7;
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n + ${sundayFirstDate})`);
    // 일요일이 1일이면 -> sundayFirstDay = 0, 7n - 6 = 1, 2, 3, 4
    // 일요일이 3일이면 -> sundayFirstDay = 5, 7n - 11 = -4, 3, ...
    for (let sundayDiv of sundayDivs) {
        sundayDiv.style.color = 'red';
    }
};

setCalendar(year, month);

