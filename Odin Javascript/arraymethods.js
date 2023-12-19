/*let arr =["I","go","home"];
delete arr[1];
console.log(arr[1]);//undefined
console.log(arr);["I", ,"home"]
console.log(arr.length);
*/

//=================================================//
/*
let arr=["I","study","Javascript","right","now"];
//Remove the first 3 elements and replace them with another
arr.splice(0,3,"let's","dance");
console.log(arr);
let removed=arr.splice(0,2);
console.log(removed);[ "let's", 'dance' ]
*/

//====================================================//
/*let arr=["I","Study","Javascript"]
arr.splice(2,0,"complex","language");
console.log(arr);[ 'I', 'Study', 'complex', 'language', 'Javascript' ]
*/


//===============================================================//
/*
let arr=[1,2,5];
arr.splice(-1,0,3,4);//[ 1, 2, 3, 4, 5 ]
//or arr.splice(2,0,3,4);
console.log(arr);
*/

/*let arr=["t","e","s","t"];
//console.log(arr.slice(1,3));//e,s
//console.log(arr.slice(-2,));//s,t
//make a copy of the arr
console.log(arr.slice());*/

/*let arr =[1,2];
console.log(arr.concat([3,4],5,6));//or 
console.log(arr.concat([3,4],[5,6]));*/


/*let arr=[1,2];
let arrayLike={
    0:"something",
    length:1
};
console.log(arr.concat(arrayLike));// 1,2,[object Object]*/

/*
let arr=[1,2];
let arrayLike={
    0:"something",
    1:"else",
    [Symbol.isConcatSpreadable]:true,
    length:2
};
console.log(arr.concat(arrayLike));
*/
/*function callOut(name){
    console.log(name);
}
["Networking","Databases","Web"].forEach(callOut);*/

/*
["bilbo","Gandalf","Nazgul"].forEach((item,index,array)=>{
    console.log(`${item} is at ${index} in ${array}`);
})*/

/*let arr=[1,0,false];

console.log(arr.indexOf(0));
//console.log(arr.indexOf(null));
console.log(arr.includes(17));*/

/*
let fruits=["Apple","Orange","Apple"];
console.log(fruits.indexOf("Apple"));
console.log(fruits.lastIndexOf("Apple"));
*/

/*
const arr=[NaN];
console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));*/

/*
let users=[
    {id:1,name:"John"},
    {id:2,name:"Pete"},
    {id:3,name:"Mary"},
    {id:4,name:"John"}
];*/


/*let user=users.find(user=>user.name=="John");
console.log(user.id);      1         */ 

/*
let user=users.findIndex(user=>user.name=="John");
console.log(user.id);

or findLastIndex
*/
/*let someUsers=users.filter(item => item.id <3);
console.log(someUsers.length);*/

/*let lengths=['Bilbo','Gandalf','Nazgul'].map(item=>item.length);
console.log(lengths);*/

/*function compare(a,b){
    if (a>b) return 1;
    if(a===b) return 0;
    if (a <b ) return -1;
}
let arr = [1,2,15];
arr.sort(compare);
console.log(arr);*/

/*[1,-2,15,2,0,8].sort(function(a,b) {
    console.log(a + "<>"+b);
    return a - b;
});*/

/*const sorted=[1,-2,15,2,0,8].sort((a,b)=>a > b ? 1 : -1);
console.log(sorted);*/

/*let countries=['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a,b)=>a > b ? 1 : -1));
console.log(countries.sort((a,b) => a.localeCompare(b)));*/

/*let arr=[1,2,3,4,5];
arr.reverse();
console.log(arr);*/

/*let names='Bilbo,Gandalf,Nazgul';
let arr=names.split(',',2)
console.log(arr)
for (let name of arr){
    console.log(`Hellooo ${name}`);
}*/

/*let arr=['Bilbo,Gandalf,Nazgul'];
let str=arr.join(';');
console.log(str);*/

/*
let arr=[1,2,3,4,5];
let result=arr.reduce((sum,current)=> sum+current);
console.log(result);*/

/*console.log(typeof([]));
console.log(typeof({}));*/
/*console.log(Array.isArray({}));
console.log(Array.isArray([]));
*/

/*
let army={
    minAge:18,
    maxAge:27,
    canJoin(user){
        return user.age >=this.minAge && user.age <this.maxAge;
    }
};

let users=[
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
]

//find users for who army can join == true
let soldiers = users.filter(army.canJoin,army);
//users.filter(user=>army.canJoin(user))
console.log(soldiers.length);
console.log(soldiers[0].age);
*/

function arraysEqual(arr1,arr2){
    return arr1.length===arr2.length && arr1.every((value,index) => value ===arr2[index]);
}
console.log(( arraysEqual([1, 2], [1, 2])));

/*

arr.fill(value, start, end) – fills the array with repeating value from index start to end.

arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.
*/