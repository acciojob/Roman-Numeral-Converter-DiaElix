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

    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let symbol = obj[key][0];
        let value = obj[key][1];

        // Handle subtractive cases
        if (value === 1000 && num >= 1000) {
            let count = Math.floor(num / 1000);
            result += symbol.repeat(count);
            num %= 1000;
        }
        else if (value === 500) {
            if (num >= 900) {
                result += "CM";
                num -= 900;
            }

            if (num >= 500) {
                result += "D";
                num -= 500;
            }
        }
        else if (value === 100) {
            if (num >= 400) {
                result += "CD";
                num -= 400;
            }

            let count = Math.floor(num / 100);
            result += symbol.repeat(count);
            num %= 100;
        }
        else if (value === 50) {
            if (num >= 90) {
                result += "XC";
                num -= 90;
            }

            if (num >= 50) {
                result += "L";
                num -= 50;
            }
        }
        else if (value === 10) {
            if (num >= 40) {
                result += "XL";
                num -= 40;
            }

            let count = Math.floor(num / 10);
            result += symbol.repeat(count);
            num %= 10;
        }
        else if (value === 5) {
            if (num >= 9) {
                result += "IX";
                num -= 9;
            }

            if (num >= 5) {
                result += "V";
                num -= 5;
            }
        }
        else if (value === 1) {
            if (num >= 4) {
                result += "IV";
                num -= 4;
            }

            result += symbol.repeat(num);
            num = 0;
        }
    }

    return result;
}

// do not edit below this line
module.exports = convertToRoman;