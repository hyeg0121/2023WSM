var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

// < : 이전달

// > : 이후달

const setCalendar = (year, month) => {
    
    console.log(year, month);
    
    // 현재 월 제목에 표시
    const monthDiv = document.getElementsByClassName('month')[0];
    monthDiv.innerHTML = `${month}월`;
    

    // 해당 월의 마지막 날짜
    var thisMonthLastDate = new Date(year, month, 0).getDate();
    
    // 해당 월의 첫 날 요일
    var thisMonthFirstDay = new Date(year, month - 1, 1).getDay();
    console.log('lastdate :', thisMonthLastDate, 'firstday :', thisMonthFirstDay);

    const datedContainerDiv = document.getElementsByClassName('dates')[0];

    for (let date = 1; date <= thisMonthLastDate; date++) {
        let dateItemDiv = document.createElement('div');
        dateItemDiv.classList.add('date');
        dateItemDiv.classList.add('item');
        dateItemDiv.innerHTML = date;
        datedContainerDiv.append(dateItemDiv);
    }
    
};

setCalendar(year, month);

