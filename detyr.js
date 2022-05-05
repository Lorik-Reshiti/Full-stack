let uc = require("upper-case");
const users = [
    {
        name:"Lorik",
        surname:"Reshiti",
        age:"24",
        city:
        {
            name:"Prizren",
            adresa:"Petrov",
            postalCode:"20000"
        }
        
    },
    {
        
        name:"Filan",
        surname:"Fisteku",
        age:"20",
        city:
        {
            name:"Prizren",
            postalCode:"20010"
        }
       
    },
    {

        name:"Fistek",
        surname:"Filani",
        age:"21",
        city:
        {
            name:"Prizren",
            postalCode:"20020"
        }
    },
    {

        name:"Flatrim",
        surname:"Halimi",
        age:"24",
        city:
        {
            name:"Gjilan",
            postalCode:"20100"
        }
    },
    {
        
        name:"Rigon",
        surname:"Gashi",
        age:"23",
        city:
        {
            name:"Prishtin",
            postalCode:"21000"
        }
    }


]

// console.log(users[2]);


for(const key of users){
    // key.name = upperCase(key.name);
    // console.log(key.name);
    key.name = uc.upperCase(key.name);
    // key.city.name = uc.upperCase(key.city.name)
   
  }
console.log(users);

for(const key of users){
  if(key.city.adresa){
    key.city.adresa = uc.upperCase(key.city.adresa)
  }
   
  }