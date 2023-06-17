
let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const res = arr.map(element => {
    if (element.profession == "developer") console.log(element);
  })

}


function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(element => {
    if (element.profession == "developer") console.log(element);
  })
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = {
    id: 4, 
    name: "susan", 
    age: "21", 
    profession: "intern"
  }
  arr.push(newEmployee);
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  let res = arr.filter(element => {
    return element.profession!="admin";
  })
  console.log(res)
}

function concatenateArray() {
  //Write your code here, just console.log
  let newAarr = [
  { id: 5, name: "jatin", age: "23", profession: "Software developer" },
  { id: 6, name: "hemant", age: "43", profession: "Senior architect" },
  { id: 7, name: "ashlee", age: "25", profession: "CEO" },];

  let res = arr.concat(newAarr);
  console.log(res);
}
