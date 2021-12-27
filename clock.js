
function initClock(){
    showTime();
    window.setInterval('showTime()',1);
}


let my_name = prompt('Lütfen isminizi giriniz:');
let myName = document.querySelector('#myName');
myName.innerHTML = my_name;

let myClock = document.querySelector('#myClock');

function showTime(){
    let now = new Date();
    let day = now.getDay(), hour = now.getHours(), minute = now.getMinutes(), second = now.getSeconds();
    let weekDay = getWeekDay(day);
    myClock.innerHTML = hour + ':' + minute + ':' + second + '  ' + weekDay;
}

function getWeekDay(day){
    switch(day){
       case 0:
           return 'Pazar';
        case 1:
            return 'Pazartesi' ;
        case 2:
            return 'Salı';
        case 3:
            return 'Çarşamba';
        case 4:
            return 'Parşembe';
        case 5:
            return 'Cuma';
        case 6:
            return 'Cumartesi';
        default:
            return 'Bilinmeyen Gün';
    }
}
