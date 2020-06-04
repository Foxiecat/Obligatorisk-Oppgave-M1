// JavaScript source code

var year = "2020";
var month = "04";
var day = "31";

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
    return day.length === 2 && day >= "01" && day <= "31";
}

function dayNotNormalLength(day) {
    return day.length === 2 && day >= "01" && day <= "30";
}

function dayFebruaryNormal(day) {
    return day.length === 2 && day >= "01" && day <= "28";
}

function dayFebruaryLeapYear(day) {
    if (isLeapYear) {
        return day.length === 2 && day >= "01" && day <= "29";
    }
}

function isDateValid(dato) {

}