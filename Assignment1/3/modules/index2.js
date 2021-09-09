//import fetch from "node-fetch";
async function fetchAsync () {
    
    let response = await fetch('http://api.nobelprize.org/v1/prize.json');
    
    let data = await response.json();
 
    return data;
  }
  
  fetchAsync()
      .then(data =>{
       var prize=data.prizes
prize=prize.filter(p=>p.year>=2000 &&p.year<=2019 && p.category=="chemistry" )
let Names=[]
let Names1=[]
for(i in prize)
{
    let Names1=[]
    //console.log(i)
    for(j in prize[i].laureates)
    {
        
        Names1.push(prize[i].laureates[j].firstname+" "+prize[i].laureates[j].surname)
    }
    var obj={}
    obj[prize[i].year]=Names1
    Names.push(obj)
}
console.log("Year by Names of Noble prize winners in Chemistry ")
console.log(Names)
      })
      .catch(reason => console.log(reason.message))

