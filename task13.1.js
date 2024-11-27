// Create a function that returns array of employees from a random time from 
//1 to 2 seconds using async await.
function employee1(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
          resolve(["tom","jerry","jack"])
      }, 1000);
    })
}
function employee2(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
          resolve(["hulk","spiderman","ironman","captain america"])
      },1000);
    })
}

async function result(){
   await  employee1().then((res)=>{console.log(res)})
 await  employee2().then((res)=>{console.log(res)})
}
result();
