   const billValue = 275;
//const billValue=49;
//const billValue=430;
x = (15/100)*billValue;
y = (20/100)*billValue


//----------------using if else----------------------

//if (billValue >= 50 && billValue<=300 ) {
   // tip = ( 15/100 ) * billValue;
  //}
  //else{
  //    tip = (20/100) * billValue;
  //}
 // console.log(billValue);

//  console.log(tip);
//----------------------using ternary--------------

let tip = (billValue >= 50 && billValue <= 300) ? x : y;
totalAmount = billValue + tip;

console.log(billValue);
console.log(tip);
console.log(totalAmount);
