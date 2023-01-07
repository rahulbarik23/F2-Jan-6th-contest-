/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  let arraydevelopers = arr.map(function(element)
  {
      if(element.profession === "developer")
      {
        console.log(element)
      }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here
  let arraydev = arr.forEach(function(array)
  {
      if(array.profession === "developer")
      {
        console.log(array)
      }
  })
}

function addData() {
  //Write your code here
  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr)
}

function removeAdmin() {
  //Write your code here
  let updatArray = arr.filter(function(array)
  {
    if(array.profession !== "admin")
    {
      return array
    }
  })

  console.log(updatArray);
}

function concatenateArray() {
  //Write your code here
  let userarray = [
      {id: 9, name: "karan", age: "19", profession: "worker"},
      {id: 24, name: "ram", age: "28", profession: "shopkeeper"},
      {id: 31, name: "rohan", age: "26", profession: "teacher"}
  ];

  let mergearray = arr.concat(userarray)
  console.log(mergearray)
}



