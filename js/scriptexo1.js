function GetBonus(salaire,bonus,money)
{

   if (typeof(salaire) =="number")
   {

    if (bonus)
    salaire=salaire*10
      
if (money)   
return salaire +money
else
     return  salaire+"£"
   }
   else 
   return console.log( "erreur");
 


}

var sal ,bon;
sal=10000;

// console.log( "le nouveau salaire est :"+ GetBonus(sal,true));
// console.log( "le nouveau salaire est :"+ GetBonus(sal,true,"DZD"));
// console.log( "le nouveau salaire est :"+ GetBonus(true,"DZD"));

// console.log( "le nouveau salaire est :"+ typeof(sal));

// function firstLettreName(nom,prenom)
// {
//  nom =nom.toUpperCase();
//  prenom =prenom.toUpperCase();
 
//   return (nom[0]+"."+prenom[0]);

// }

// console.log( firstLettreName("gaoua","meriem") );
  //exo 6


  for (i=0;i<10;i++)
  {
     
    console.log ("for: "+i+" X "+i+ " = " + i*i);
  }
  var  i=0;
  while(i<10)
  {

    console.log ("while: "+i+" X "+i+ " = " + i*i);
    i++;
  }

 
  for (i=0;i<10;i++)
  {
     if (i%2 !=0) continue;
    console.log ("nombre paire :"+i);
  }


  for (i=0;i<100;i++)
  {
     if (i%2 ==0) continue;
    console.log ("nombre paire :"+i);
  }



  var sumeven =0;
 var sumOdds =0;
  for (i=0;i<=100;i++)
  { 
     if (i%2 ==0)  sumeven=sumeven+i;

     else 
       sumOdds =sumOdds+i;

    
  }

  console.log ("nombre paire :"+sumeven);
  console.log ("nombre impaire :"+sumOdds);

