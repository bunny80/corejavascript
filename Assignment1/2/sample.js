const data = require("./sample.json")
var arr=[]
console.log(data)
for(i in data.items)
{
    var arr1=[]
    arr1.push({"name":data.items[i].name},{"full_name":data.items[i].full_name},{"private":data.items[i].private})
    let owner=[]
    owner.push({"login":data.items[i].owner.login},{"name":data.items[i].owner.url},{"followersCount":data.items[i].owner.followers_url},{"followingCount":data.items[i].owner.following_url})
    arr1.push({"owner":owner},{"lisence":data.items[i].license},{"score":data.items[i].score},{"numberOfBranch":data.items[i].branches_url})
    arr.push(arr1)
}

console.log(arr)