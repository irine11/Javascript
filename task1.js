let userName = "ანა";
let brotherName = "ლევანი";
let userAge = 28;
let brotherAge = 21;

let ageGap = userAge - brotherAge;

console.log(`${userName} არის ${ageGap} წლით უფროსი ${brotherName}`);
/*
Task 2:
    გვაქვს სტუდენტების სახელების მასივი['John', 'Sam', 'Ann', 'Will', 'Andrew', 'Joseph', 'Lorelai', 'Amelie', 'Den']
დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.
*/
let studentName = [
  "John",
  "Sam",
  "Ann",
  "Will",
  "Andrew",
  "Joseph",
  "Lorelai",
  "Amelie",
  "Den",
];
console.log(studentName[Math.floor(studentName.length / 2)]);

/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)'
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან


    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        
firstName; lastName; age; subjects; roommate;
*/
let userStudent = {
  firstName: "Jean",
  lastName: "Valverde",
  age: 25,
  subjects: ["physics", "biology", "geography", "phycology", "chemisry"],
  roommate: {
    fullname: "Emmanuel",
    age: 45,
  },
};

for (key of userStudent.subjects) {
  console.log(key);
}

userStudent.fullName = userStudent.firstName + " " + userStudent.lastName;
console.log(userStudent.fullName);
let result = `${userStudent.firstName} ${userStudent.lastName} არის ${userStudent.age} წლის და მისი რუმმეითი არის ${userStudent.roommate.fullname}`;
console.log(result);

// /*
//     Task 4 :
//         გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
//         გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
//         დალოგეთ ეს ელემენტი.

// */

let array = ["Banana", "Orange", "Mango", 2, 12];
for (let x of array) {
  if (typeof x == "string") {
    console.log(x);
  }
}

/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/
let array1 = [12, 23, 43, 11, 9, 2, 121, 90];
for (let x of array1) {
  if (x > 31 && x % 2 == 0) {
    console.log(`Element ${x} is greater than provided value and is EVEN`);
  } else if (x < 31 && x % 2 == 1) {
    console.log(`Element ${x} is less than provided value and is ODD`);
  }
}
