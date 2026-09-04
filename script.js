function convertToRoman(num) {
    const obj = {
        0: ['M', 1000], 
        1: ['D', 500], 
        2: ['C', 100], 
        3: ['L', 50], 
        4: ['X', 10], 
        5: ['V', 5], 
        6: ['I', 1]
    };

    let result = "";

    // M
    while (num >= obj[0][1]) {
        result += obj[0][0];
        num -= obj[0][1];
    }

    // 900 = CM
    if (num >= 900) {
        result += "CM";
        num -= 900;
    }

    // D
    while (num >= obj[1][1]) {
        result += obj[1][0];
        num -= obj[1][1];
    }

    // 400 = CD
    if (num >= 400) {
        result += "CD";
        num -= 400;
    }

    // C
    while (num >= obj[2][1]) {
        result += obj[2][0];
        num -= obj[2][1];
    }

    // 90 = XC
    if (num >= 90) {
        result += "XC";
        num -= 90;
    }

    // L
    while (num >= obj[3][1]) {
        result += obj[3][0];
        num -= obj[3][1];
    }

    // 40 = XL
    if (num >= 40) {
        result += "XL";
        num -= 40;
    }

    // X
    while (num >= obj[4][1]) {
        result += obj[4][0];
        num -= obj[4][1];
    }

    // 9 = IX
    if (num >= 9) {
        result += "IX";
        num -= 9;
    }

    // V
    while (num >= obj[5][1]) {
        result += obj[5][0];
        num -= obj[5][1];
    }

    // 4 = IV
    if (num >= 4) {
        result += "IV";
        num -= 4;
    }

    // I
    while (num >= obj[6][1]) {
        result += obj[6][0];
        num -= obj[6][1];
    }

    return result;
}
// do not edit below this line
module.exports = convertToRoman;