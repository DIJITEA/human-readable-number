var OneToNineteen = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
var TyNum = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];


module.exports = function toReadable(number) {
    let ans = "zero";
    if (number == 0){
        return ans;
    }
    else if (number > 99) {
        number = String(number).split("");
        ans = OneToNineteen[number[0]] + " hundred";

        if (
            (Number.parseInt(number[1] + number[2]) > 0) &&
            (Number.parseInt(number[1] + number[2]) <= 19)
        ) {
            ans =
                ans +
                " " +
                OneToNineteen[Number.parseInt(number[1] + number[2])];
            
        } else if ((Number.parseInt(number[1] + number[2]) > 19)  && number [2] > 0)  {
            ans = ans + " " + TyNum[number[1]];
            ans = ans + " " + OneToNineteen[number[2]];
        }
        else if ((Number.parseInt(number[1] + number[2]) > 19)  && number [2] == 0) {
            ans = ans + " " + TyNum[number[1]];
        }
    }
    else{
        number = String(number).split("");
        if (
            (Number.parseInt(number[0] + number[1]) > 0) &&
            (Number.parseInt(number[0] + number[1]) <= 19)
        ) {
            ans = OneToNineteen[Number.parseInt(number[0] + number[1])];
            
        } else if ((Number.parseInt(number[0] + number[1]) > 19)  && number [1] > 0)  {
            ans =  TyNum[number[0]];
            ans = ans + " " + OneToNineteen[number[1]];
        }
        else if ((Number.parseInt(number[0] + number[1]) > 19)  && number [1] == 0) {
            ans = TyNum[number[0]];
        }
    }

    return ans;
};
