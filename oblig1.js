// JavaScript source code

var day = "30";
var month = "01";
var year = "2021";

function isDateValid(dato) {

    if (isLeapYear(year) && monthLength(month) && dayFebruaryLeapYear(day)) {
        return true;
    }
    else if (yearLength(year) && monthLength(month) && dayFebruaryNormal(day)) {
        return true;
    }
    else if (yearLength(year) && monthLength(month) && dayNormalLength(day)) {
        return true;
    }
    else if (yearLength(year) && monthLength(month) && dayNotNormalLength(day)) {
        return true;
    }

    isDatoLengthValid();
    dots();
    yearLength();
    isLeapYear(year);
    monthLength(month);
    dayFebruaryLeapYear(day);
    dayFebruaryNormal();
    dayNormalLength();
    dayNotNormalLength();
}

function isDatoLengthValid(dato) {
    return dato.length == 10;
}

function dots(dot) {
    return dot = ".";
}

function yearLength(year) {
    return year.length === 4 && year >= '0000' && year <= '9999';
}

function isLeapYear(leapYear) {
    return ((leapYear % 4 == 0) && (leapYear % 100 != 0)) || (leapYear % 400 == 0);
}

function monthLength(month) {
    return month.length === 2 && month >= "01" && month <= "12";
}

function dayNormalLength(day) {
    if (month != "02") {
        return day.length === 2 && day >= "01" && day <= "31";
    }
}

function dayNotNormalLength(day) {
        return day.length === 2 && day >= "01" && day <= "30";
}

function dayFebruaryNormal(day) {
    if (month == "02") {
    return day.length === 2 && day >= "01" && day <= "28";
    }

}

function dayFebruaryLeapYear(day) {
    if (month == "02") {
    return day.length === 2 && day >= "01" && day <= "29";
    }

}