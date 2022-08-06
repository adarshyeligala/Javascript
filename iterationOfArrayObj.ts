// 1) Using Array.prototype.forEach() function
var obj = [
    {
        name: 'Adarsh',
        age : 29
    },
    {
        name: 'Roger',
        age : 28
    }, {
        name: 'Yeligala',
        age : 30
    }
];
obj.forEach(o =>console.log(o));
 
//2)  Using for…of statement
   
   for(var value of obj){
    console.log(value);
   }
 
//3) Using Object.entries() function

Object.entries(obj).forEach(([_,value])=>console.log(value));

 //Or with for…of loop using destructuring assignment:

 for(const [_,value] of Object.entries(obj)){
    console.log(value);
 }

 //Using Object.keys() function

//  Object.keys(obj).forEach(key =>console.log(obj[key]));
 Object.keys(obj).forEach(key => console.log(obj[key]));

// Or with for…of loop:

for(const key of Object.keys(obj)){
    console.log(obj[key]);
}

//5. Using Object.values() function

Object.values(obj).forEach(value =>console.log(value));

//or with for of

for(const value of Object.values(obj)){
    console.log(value);
}

// for in

for(const value in obj){
    console.log(obj[value])
}
