// var dog ={}

// console.log(dog);

// dog ={

//     name:"liza",
//     legs :4,
//     color :"",
//     age:18,
// }
// console.log (dog.name);
// dog.bread("");

var  users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

 
var ancienmaxvalues =0;
var userwithmaxskils ;

 var usersName =Object.keys(users);//tableau nom
 
 
console.log(usersName);



  for (var x of usersName) {
     // var tab=  x.skills;  
      var skil =Object.values(users[x].skills)   ;
      //console.log(skil);
     if  (skil.length<  ancienmaxvalues)  continue;
    else
    { ancienmaxvalues =skil.length;
     userwithmaxskils=x;
    } 
  }

console.log (userwithmaxskils);


 
const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name)
{
 
	return " Hi! I  m  "  +  name + "  , and I'm from " +  GUEST_LIST[name] ;
	
}
 
	var listnames = Object.keys(GUEST_LIST) ;
	for (i=0;i<listnames.length;i++)
		{
			greeting(listnames[i]);
			
		}

        