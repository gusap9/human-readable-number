module.exports = function toReadable (number) {
    const underTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const divisibleByTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const underTwenty = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number <= 10)
        return underTen[number];
    else if (number >= 10 && number < 20)
        return divisibleByTen[number % 10];
    else if (number >= 20 && number < 100)
        if (number % 10 === 0)
            return underTwenty[number / 10 - 2];
        else
            return underTwenty[(number / 10 | 0) - 2] + ' ' + underTen[number % 10];
    else if (number >= 100 && number < 1000)
        if (number % 100 === 0)
            return underTen[(number / 100 | 0)] + ' hundred';
        else if ((number / 10 | 0) % 10 === 0)
            return underTen[(number / 100 | 0)] + ' hundred ' + underTen[(number % 10 | 0)];
        else if ((number / 10 | 0) % 10 === 1)
            return underTen[(number / 100 | 0)] + ' hundred ' + divisibleByTen[(number % 10 | 0)];
        else
        if (number % 10 === 0)
            return underTen[(number / 100 | 0)] + ' hundred ' + underTwenty[(number / 10 | 0) % 10 - 2];
        else
            return underTen[(number / 100 | 0)] + ' hundred ' + underTwenty[(number / 10 | 0) % 10 - 2] + ' ' + underTen[(number % 10 | 0)];
}
