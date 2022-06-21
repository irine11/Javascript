//task 1
/*  
    დაწერეთ ფუნქცია რომელიც მიიღებს ორ რიცხვს და აღნიშნული ფუნქცია
    დააბრუნებს ამ ორი რიცხვის უდიდეს საერთო გამყოფს . 
    იგივე ფუნქცია დაწერეთ რეკურსიული ფუნცქიის გამოყენებით იპოვეთ უდიდესი საერთო გამყოფი 
    gcd(a,b)
    
*/

//  function gcd_two_numbers(x, y) {
//   if ((typeof x !== 'number') || (typeof y !== 'number'))
//     return false;
//   x = Math.abs(x);
//   y = Math.abs(y);
//   while(y) {
//     var t = y;
//     y = x % y;
//     x = t;
//   }
//   return x;
// }

// console.log(gcd_two_numbers(12, 13));
// console.log(gcd_two_numbers(9, 3));

// //gcd
// const gcd = (...arr) => {
//   const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
//   return [...arr].reduce((a, b) => _gcd(a, b));
// };
// console.log(gcd(12, 13));
// console.log(gcd(9, 3));

// //Task 2

// // დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს
// // და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს .
// // sumOfDigits(1312) = 1+3+1+2 = 7;


// // აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
// // ფუნქციის გამოყენებით .

// function sumDigits(n) {
//   if (n < 10) return n;
//   return sumDigits((n % 10) + sumDigits(Math.floor(n / 10)));
// }

// sumDigits(2); // 2
// sumDigits(2568); // 3

// console.log(sumDigits(1312));





//Task 3
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/
//     let factory = {
//     facName : 'Volkswagen Wolfsburg Plant',
//     calculateWorkload: function () {
//         return [40, 25, 28, 30, 31];
      
//  }
  

// //     formatArray : function (name) {
//     factoryEmployees
          
// //     }

// }

// let factoryEmployees = {
//     employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
//     employeeNum : this.employees.length,
// }

// let workloadData = {
//     employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", timeSpent : 25 },{name : "Maria", timeSpent : 28 },{name : "Dan", timeSpent : 30 },{name : "Lorelai", timeSpent : 31 }]
// // }

// // //Task 4


// // დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
// // აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

// // hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
// // thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 

//Task 5
/*
დაწერეთ რეკურსიული ფუნქცია checkIfEven(n) . აბრუნებს გადაცემული მნიშვნელობა
არის თუ არა ლუწი . აუცილებლად გამოიყენეთ რეკურსია

*/
function checkeven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return checkeven(num - 2);
  }
}
console.log(checkeven(8));
console.log(checkeven(9));