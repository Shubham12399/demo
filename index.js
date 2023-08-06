// 100 Javascript Questions & Answere 
// 1 st question 

    // let a = [];
    // let b = [];
    // console.warn(a==b);
    // console.warn(a===b);
    
// jab hamlog do array ko compaire karge to actual array compaire nahi hoti hai bulki uski momory location compaire hoti hai
        // aur memory location kisi ki bhi do nahi ho sakti hai 

// 2nd question 

//   let a = [];
//   let b = a ;
//   console.warn(a==b);
//   console.warn(a===b);

//   yahan b me a value copy nahi ho rahi hai balki b ko a ka refrence mil raha hai 
// dekha jaye to yahan a ko a ke sath hi compare kiya ja raha hai easliye yahan dono ki memory location same hai easliye dono case me true return karega 

// 3rd question 

// let a = [20];
// let b = ["20"];
// console.warn(a[0]==b[0]);
// console.warn(a[0]===b[0]);  // yahan === me data type bhi match hota hai

// 4th question 

// let z = [1,2,3,4];
// console.warn(...z);

// ... destructurer ye array ke sabhi elements ko unpack kar deta hai 

// 5th question

// console.warn(typeof NaN);

// NaN = not a number mean easka data type bhi number hota hai 

// 6th question 

    // const set = new Set([1,2,3,2,2,5]);
    // console.log(set);

    // Set is a constructer function hai jiske karan easke aage new keyword ka use hota hai
    // aur ye hamesha ek Array as a argument leta hai 

// 7th question 
// let data = {name : "shubham"};
// console.log(delete data.name); output true

// yahan true es liye aaya ki delete keyword ke karan obj se data.name delete ho gaya hai 
// eas liye true return huaa hai
// delete keyword se keval obj ki property aur methods delete hoti hai obj nahi 

// 8th question 

// const data = { name:"vivek"};
// console.warn(delete data); // output me false aayega 
// kyuki ham log direct obj ko delete nahi kar sakte hai "delete" keyword se keval obj ki property delete hoti hai

// 9th question 
// const array = ["anil" , "peter" ,"sam"];
// let [y] = array;
// // console.log(  [y] = array); // output [ 'anil', 'peter', 'sam' ];
// console.log(y) // anil

// kyuki [y] me yahan y array ke first index wale element jo target kar raha Hai 



// 10th question 
// const arr = [ 'anil', 'peter', 'sam' ];
// let [ , y]= arr;
// console.log(y) // peter

// [ , y ] es tarike se ham log 2nd aur third element ko target kar sakte hai 



// 11th question 

// how to get name property without using "." 

// let obj = { name:"shubham" , age:18 , result:"pass" };
// let {name} = obj;
// console.log(name);


// lekin yahan array wali baat nahi hai ki : {name} me  name first position per hai to obj se first wala property lega balki , yahan "name" uus property ka naam hai jo obj me exist karta hai agar mai {age} leta to mujhe age milta 
// es tarike se ham log bina dot(.) ka use kiye kisi obj ki property ko access kar sakte hai


// 12th question 
// let data = {modal : "latitude 54001" , size:"14 inch" , brand:"dell"};
// let info = {processor:"octa-core 7th gen" , touchable:true};

// // merge two objects using destructure(spreadoperator : ...);
// let mergeObj = {...data , ...info};
// console.log(mergeObj);

// 13th question 

// let data = {modal : "latitude 54001" , size:"14 inch" , brand:"dell"};
// let info = {new:"data" , new2:"data2"};
// console.log({data , ...info}); 
// output { data: { modal: 'latitude 54001', size: '14 inch', brand: 'dell' },
// new: 'data',
// new2: 'data2'
// }

// 16th question 

// let result = false  || null || 0;
// if(result) console.log("yes")
// else{console.log(result)};

// aise case (false  || {} || null) me javascript pahale truty value ko find karta hai aur jahan bhi easko tru value mila wo wahi per stop ho jata hai lekin agar koi value true nahi milta hai to ye last me chala jata hai aur jo bhi hota hai usi ko variable me assign kar deta hai 

// promis ka syntax memorising ...... 
// let promise = new Promise((res,err) => {

//     let resolve = true;
//     if(resolve) {
//         res("resolve"); 

//     }
//     else  {
//         err("err");
//     }
   
// })

// promise.then((data)=>{
// console.log(data)
// }).catch((error)=>{
//     console.log(error);
// })

// promise me data bhejne ke liye hame resolve() ke ander as a argument data ko pass karna padega tabhi .then aur .catch ke ander data y error jayega 

// move on question 

// 17th question 

// console.warn(Promise.resolve(5)); // output  Promise {fullfil : 5}


// // 18th question 
// console.log("❤️" == "❤️"); // true 
// console.log("❤️" === "❤️"); // true 

