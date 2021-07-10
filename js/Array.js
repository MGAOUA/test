// var EmptyArray1=[];
// var Array5 =["A" ,"13",12 ,"meriem",1,2,7];
// var lenghtArray =Array5.length; 

// console.log ("first "+Array5[0] );
// console.log(Math.round((Array5.length/2 )));
// console.log ("Middle "+Array5[Math.round((Array5.length/2 )-1)] );
// console.log ("Last "+Array5[Array5.length -1] );


//var mixedDataTypes =[];

//mixedDataTypes.push();


//  var itCompanies =["Facebook", "Google", "Microsoft", "Apple", IBM, 
//    "Oracle" , "Amazon"];

// console.log(itCompanies.length);


var countries =[
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

var CountriesLenght =[];
// var i =0;
// while(i<countries.length)
// {
//     CountriesLenght.push (countries[i].length);
//     i++;
// }
 

//console.log(CountriesLenght);
var i=0;
var ArrayStruct =[];

while(i<countries.length)
{
    CountriesLenght.push ([countries[i], 
        countries[i].substring(0,3).toUpperCase(),        
        countries[i].length]);
    i++;
}


console.log(CountriesLenght);