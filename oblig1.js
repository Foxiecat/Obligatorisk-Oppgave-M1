// JavaScript source code



function isDateValid(dato) {

    const year = dato.substring(6,10);
    const month = dato.substring(3,5);
    const day = dato.substring(0, 2);
    const dot = dato.substring(2,3);

    const 29days = is29Valid();
    
    if (isDatoLengthValid(dato) && (is28Valid(day, year) || is29Valid(day, month, year) || dayNormalLength(day, month) || dayNotNormalLength(day, month)) && monthLength(month) && yearLength(year)) {
        return true;

    } 

    isDatoLengthValid();
    dots();
    yearLength();
    isLeapYear();
    monthLength();
    is29Valid();
    is28Valid();
    dayNormalLength();
    dayNotNormalLength();
}

function isDatoLengthValid(dato) {
    return dato.length == 10;
}

function dots(dot) {
    if (dot.IndexOf(".") == 2 && dot.lastIndexOf(".") == 5) {
        return true;
    } else { return false; }
}

function yearLength(year) {
    return year.length === 4 && year >= "0000" && year <= "9999";
}

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function monthLength(month) {
    return month.length === 2 && month >= "01" && month <= "12";
}

function dayNormalLength(day, month) {

    if (month == 01 || month == 03 || month == 05 || month == 7 || month == 8 || month == 10 || month == 12) {
        return day.length === 2 && day >= "01" && day <= "31";
    } else { return false; }
}

function dayNotNormalLength(day, month) {
    if (month != 02 && (month != 01 || month != 03 || month != 05 || month != 7 || month != 8 || month != 10 || month != 12)) {
        return day.length === 2 && day >= "01" && day <= "30";
    } else { return false; }
}

function is29Valid(day,month,year) {
    if (day <= 29 && month == 02 && isLeapYear(year)) {
        return true;
    } else { return false; }
}

function is28Valid(day,year) {
    if (day <= 28 && !isLeapYear(year)) {
        return true;
    } else { return false; }
}