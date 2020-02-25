module.exports = function toReadable (number) {
    const numbers1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    const numbers2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let hundredths = Math.trunc(number / 100);
    let hundredthsResidue = number - hundredths * 100;
    let tensResidue = hundredthsResidue -  Math.trunc(hundredthsResidue / 10) * 10;
    let tens = Math.trunc(number / 10);
    let units = number - tens * 10;

    if (number <= 19) {
       return numbers1[number];
    } else if (number < 100) {

        if (number % 10 === 0) {
           return numbers2[tens - 2];
        } else {
           return numbers2[tens - 2] + ' ' + numbers1[units];
        }
    } else if (number < 1000) {
        if (number % 100 === 0) {
           return numbers1[hundredths] + ' hundred'
        } else if (hundredthsResidue <= 19) {
           return numbers1[hundredths] + ' hundred ' + numbers1[hundredthsResidue]
        } else {
            if (hundredthsResidue % 10 === 0) {
               return  numbers1[hundredths] + ' hundred ' + numbers2[Math.trunc(hundredthsResidue / 10) - 2];
            } else {
               return  numbers1[hundredths] + ' hundred ' + numbers2[Math.trunc(hundredthsResidue / 10) - 2] + ' '  + numbers1[tensResidue];
            }
        }
    }
};
