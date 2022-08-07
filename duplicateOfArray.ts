let a = [1,2,3,4,4,4,4,4,4,4,4,"Adarsh","Adarsh", 4,4,4,4, "chandu", "chandu"];
//1st Approach
let uniqueArray = [];
 for(let i=0; i < a.length; i++){
    if(! uniqueArray.includes(a[i])){
        uniqueArray.push(a[i]);
    }
 }
 console.log(uniqueArray);

 //2nd Approach

 let uArray =a.reduce((acc,currentValue)=>{
    if(!acc.includes(currentValue)){
        acc.push(currentValue)
    }
    return acc
 },[])
 console.log(uArray);

 //3rd approach

 let iterableArray = [...new Set(a)];
 console.log(iterableArray)