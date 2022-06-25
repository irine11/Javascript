//Task 1

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი
*/
// let array1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// function findMostFrequest(arr) {
//   let compare = " ";
//   let mostFreq = " ";

//   arr.reduce((acc, val) => { 
//     if (val in acc) {
//       acc[val]++; // then increment it by 1
//     }
//     else {
//       acc[val] = 1; // or else create a key with value 1
//     }
//     if (acc[val] > compare) {// if value of that key is greater // than the compare value.
//       compare = acc[val]; // than make it a new compare value.
//       mostFreq = val; // also make that key most frequent.
//     }
//     return acc;
//   }, {});
//   console.log("Most Frequent Item is:", mostFreq);
// }
// findMostFrequest(array1);




/*
Task 2 : 
დაწერეთ ფუნქცია რომელიც იღებს რაღაც ციფრების მიმდევრობას (სტრინგად ან რიცხვად) პარამეტრად , ჩასვით ტირეები (-) ყოველ ორ ლუწ რიცხვს შორის. 
მაგალითად 025468 უნდა დაგვიბრუნდეს როგორც 0-254-6-8*/
// let input = "025468";
// let result = [input[0]], 
// len = input.length;

// for (var i = 1; i < len; i++) {
//   if (input[i - 1] % 2 === 0 && input[i] % 2 === 0) {
//     result.push('-', input[i]);
//   } else {
//     result.push(input[i]);
//   }
// }
// console.log(result.join(''));



/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .


შედეგი უნდა იყოს : [1,2,3,30]*/

// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];
// let array3 = array1.concat(array2.filter((item) => array1.indexOf(item) < 0))
// console.log(array3);

/*
Task 4 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map

*/

// function readyToPutInTheDOM(arr){
//     // your code here
//   }
//   console.log(readyToPutInTheDOM([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 

  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]



  /* Task 5 */

  /* 
  გვაქვს ფუნქცია sumOfDifferences(arr) , რომელიც იღებს მასივს . 
  პროგრამამ მასივი უნდა დაალაგოს კლებადობით და შემდეგ უნდა დაგვითვალოს
  მეზობელი ელემენტების სხვაობების ჯამი . 
  მაგ : [2, 1, 10]  -->  9 , რაც ნიშნავს დავალაგებდით [10,2,1] კლებადად
  შემდეგ  (10-2) + (2-1) = 8 + 1 = 9

  სორტირების ფუნქცია დაწეროთ თქვენით ან გამოიყენოთ Array.sort() მეთოდი რომელიც
  პარამეტრად იღებს compareFn ფუნქციას , შედარების ქოლბექს .



  */
  
