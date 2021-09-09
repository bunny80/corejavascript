
const battle=require("./battles.json")
const func=require("./modules/functions")




var most_active=[]
var name=[]
for(obj of battle){
    name.push(obj.name)
}

var most_name=func.data.mode(name)
var active_name=[]
if(most_name[1]==1) active_name.push("Each name is unique")
else active_name=most_name


var region=[]
for(obj of battle){
    region.push(obj.region)
}
var most_region=func.data.mode(region)


var attack=[]
for(obj of battle){
    attack.push(obj.attacker_king)
}
var most_attack=func.data.mode(attack)


var defend=[]
for(obj of battle){
    defend.push(obj.defender_king)
}
var most_defend=func.data.mode(defend)

most_active={"most_active":{"name":active_name[0],"region":most_region[0],"attack":most_attack[0],"defend":most_defend[0]}}


var battle_type=[]
for(obj of battle){
    battle_type.push(obj.battle_type)
}
battle_type=func.data.mode(battle_type)
var outcome=[]
for(obj of battle){
    outcome.push(obj.attacker_outcome)
}



var attacker_outcome=[]
attacker_outcome=func.data.count(outcome)

var size=[]
for(obj of battle){
    size.push(obj.defender_size)
}
var size = size.filter(function (e) {return e != null;});
var defender_size=[]
defender_size.push(func.data.arithmetic(size))


output=[]
output.push(most_active,{attacker_outcome},{battle_type},{defender_size:{"Average":defender_size[0][0],"Min":defender_size[0][1],"Max":defender_size[0][2]}})
console.log( output) ;
