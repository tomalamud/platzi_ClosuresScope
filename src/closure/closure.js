// NO RECUERDA
// const moneyBox = (coins) => {
//     var noSaveCoins = 0;
//     noSaveCoins += coins;
//     console.log(`Money Box: $${noSaveCoins}`);
// }
// moneyBox(5);
// moneyBox(10);

// CLOSURE SI RECUERDA
const moneyBoxClosure = () => {
    var savedCoins = 0;
    const countCoins = (coins) => {
        savedCoins += coins;
        console.log(`Money Box: $${savedCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBoxClosure();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
