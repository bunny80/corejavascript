const noble = require("./prize.json")
//const func=require("./modules/functions")
//dataSource.data.fetchAsync()
//noble=JSON.parse(noble)
var prize=noble.prizes
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
console.log(Names)

//console.log(prize)
