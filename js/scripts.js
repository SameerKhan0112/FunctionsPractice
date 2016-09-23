//I will write a function that says hello.
//This fucntion will take an argument
//name which is a string
function sayGeve(name)
{

  //console.log('Good Evening ' + name);
}

//I will write some variables
//which will be strings of people's names.

var myName='Sameer';
var sisName= 'Nida';

//Here I call the function sayGeve
sayGeve(myName);
sayGeve(sisName);

//I will write a function that will greet a person
//The person will be passed to the function as an object.
//The function will parse the object and greet the person.
function greetPerson(person)
{
    //console.log('Hello '+ person.firstName+'. You are '+ person.age+' years old');
}

//I will make an object that describes me.
var myObject= {
  firstName: 'Sameer',
  lastName: 'Khan',
  age: 23
}
//I will make other object that describes my cousin
var cousObject= {
  firstName:'Talha',
  lastname:'Wahid',
  age: 26
}

//I will call the greetPerson function passing myObject as an argument
greetPerson(myObject);
greetPerson(cousObject);

// I will now make an array. Each object will now describe a person.

var peopleList = [
  {
    firstName: 'Sameer',
    lastName: 'Khan',
    age: 23
  },
  {
    firstName:'Talha',
    lastname:'Wahid',
    age: 26
  },{
    firstName:'Nida',
    lastname:'Wahid',
    age: 22
  },{
    firstName:'Najid',
    lastname:'Qadri',
    age: 18
  }
];
//console.log(peopleList);

// I will write a function that will greet peopleList
//It takes as its argument an array, and each item in this
//array is an object that describes a person

function greetPeople(list)
{
// I will loop through the items in my array with the for loop
  for (var i = 0;i<list.length; i++)
  {var currentItem = list [i];

   //Greet each person in turn
   console.log('Hello, '+ currentItem.firstName + '. You are '+ currentItem.age + ' years old.');
}}

//Call the greetPeople function and pass personList to it
greetPeople(peopleList);

//I will make a function that sorts people by age
//This function takes and argument called lists which is an array of people
function sortPeople(list){

//Create two arrays one for older people,
//and one for younger people
//These will be blank arrays that we will populate with our forEach
var older=[];
var younger=[];

  //loop through the array
  list.forEach(function(d,i)
  {

    if(d.age<30){
      younger.push(d);
    }
    else {
      older.push(d);
    }
  })

  //This function will return our arrays as an object
  var buckets = {
    olderList: older,
    youngerList: younger
  };

  return buckets;

}

//call sort people and pass the personList to it
sortPeople(peopleList);

//Make another array with more people
var morePeople = [
  {
      firstName: 'Piyush',
      lastName: 'Nagpal',
      age: 37,
  },
  {
    firstName: 'Nitika',
    lastName: 'Kakkar',
    age: 21,
      },
  {
    firstName: 'Dheeraj',
    lastName: 'Mishra',
    age: 29,
  },
];

//run the function again with new array
sortPeople(morePeople);

//create two variable where sortPeople returns sorted lists of people
var morePeopleSorted= sortPeople(morePeople);
var personListSorted = sortPeople(peopleList);

//isolate the younger list from sorted person list
var personListYounger = personListSorted.youngerList;

//console log the new list and the original list to compare
console.log(personListYounger);
console.log(peopleList);
