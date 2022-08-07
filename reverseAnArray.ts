let array = [1,2,3,4,5,6,7,8,'Adarsh', 'Yeligala'];
//1st Approach
let reverseArray = [];
for(let i = array.length; i>0 ; i--){
    reverseArray.push(array[i-1])
}
console.log(reverseArray);

//2nd Approach
  let arrayReverse = array.reduceRight((acc,el) =>{
    acc.push(el);
    return acc;
  },[])
  console.log(reverseArray);

  //3rd approach

  let reverseAnArray = array.reverse();
  console.log(reverseAnArray);