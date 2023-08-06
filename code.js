// const input = [2, 7, 11, 4, -2];
// // const output = [20, 15, 11, 18, 24];
// const output  = [];
// input.forEach((e,i)=>{
//    let outputNo = input.reduce((e, i)=>{
//        return e+i;
//     }) 
//     output.push(outputNo - input[i]);
// })

// console.log(output);



// const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
// const input2 = { a: 2, e: 12, f: 6, d: 10 };

// output = { d:10 , e:12} ;

// const set = {...input1  , ...input2};
// let output = {};
// let key = []
// // console.log(set);
// for (let elem1 in input1) {
//     if (input1[elem1] == input2[elem1]) {
//         output[elem1] = input1[elem1];
//     }
// }

// console.log(output);
// yahan elem1 koi index nahi hai balki yah key name jaise a , b , c ,d ,e  ,f hai 



// find second largest number 

// const input = [2, 7, 11, 4, -2]
// const input2 = [1, 4, 7, 2, 4, 7];
// output = 7

// let output = 0;
// function getSecLargeValue(arr) {
//     let newarr = [...new Set([...arr])];
//     for (let i = 0; i < newarr.length; i++) {
//         return newarr.sort((a, b) => b - a)[1];
//     }
// }

// console.log(getSecLargeValue(input));
// console.log(getSecLargeValue(input2));

// * newarr.sort((a, b) => b - a)  this is use to  arragne an array to decending order 