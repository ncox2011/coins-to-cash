const piggyBank = {quarters: 5, nickels: 10, dimes: 20, pennies: 210,};
const coinValues = {quarterValue: 0.25, nickelValue: 0.05, dimeValue: 0.10, pennyValue: 0.01}
let dollarAmount = 0;

let totalQuarter = piggyBank.quarters*coinValues.quarterValue;
let totalNickel = piggyBank.nickels*coinValues.nickelValue;
let totalDimes = piggyBank.dimes*coinValues.dimeValue;
let totalPenny = piggyBank.pennies*coinValues.pennyValue;

dollarAmount = totalDimes+totalNickel+totalQuarter+totalPenny;
console.log(dollarAmount);



//let totalQuarter = function () {
  //  quarters * quarterValue
//}