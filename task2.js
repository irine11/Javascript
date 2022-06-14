// //Task 1
// /*
//     შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
//     ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
//     let sampleObject = {
//         isItarable : false,
//         sampleArray : [12,63,21,34,98,57]
//     }
//     თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
//     თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"
// */
// function getObject(sampleObject) {
//   if (sampleObject.isIterable == true) {
//     console.log("provided array is iterable");
//     for (key of sampleObject.sampleArray) console.log(key);
//   } else {
//     console.log("provided array isn't iterable");
//   }
// }

// let sampleObjectNonIterable = {
//   isIterable: false,
//   sampleArray: { foo: "bar" },
// };

// let sampleObjectIterable = {
//   isIterable: true,
//   sampleArray: [12, 63, 21, 34, 98, 57],
// };

// // getObject(sampleObjectNonIterable);
// // getObject(sampleObjectIterable);

// //Task 2
// /*
//     შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
//     ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
//     აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
//     თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
//     წინააღმდეგ შემთხვევაში false
    
// */
// function checkPythagoras(x, y, z) {
//   if ((x ^ 2) + (y ^ 2) == (z ^ 2)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// checkPythagoras(4, 3, 5);
// checkPythagoras(4, 3, 6);

//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/
// let myArray = [2, 14, 25, 75, 11, 6];

// let minElement = myArray[0];
// for (let i = 1; i < myArray.Length; ++i) {
//   if (myArray[i] < minElement) {
//     minElement = myArray[i];
//   }
// }
// console.log(minElement);
let myArray = [2, 14, 25, 75, 11, 6];
let maxElement = myArray[0];
for (let i = 1; i < myArray.length; ++i) {
  if (myArray[i] > maxElement) {
    maxElement = myArray[i];
  }
}

console.log(maxElement);



// let arrayToGetMinMax = [2, 14, 25, 75, 11, 6];
// getMinMax(arrayToGetMinMax);

// function arrayMin(array) {
//   let len = array.length;
//   let min = Infinity;
//   while (len--) {
//     if (array[len] < min) {
//       min = array[len];
//     }
//   }
//   return min;
// }

// function arrayMax(array) {
//   let len = array.length;
//   let max = -Infinity;
//   while (len--) {
//     if (array[len] > max) {
//       max = array[len];
//     }
//   }
//   return max;
// }

// function getMinMax(x) {
//   let min = arrayMin(x);
//   let max = arrayMax(x);
//   console.log(`Min value is ${min} and Max value is ${max}`);
// }

//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

if (angle==)

//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/
