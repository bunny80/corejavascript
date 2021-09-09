var form=document.getElementById("myform")

form.addEventListener('submit',function(e){
    e.preventDefault()

    var search =document.getElementById("search").value


    var originalName=search.split(' ').join("")
      
      //alert(originalName)

     fetch('https://api.github.com/search/repositories?q='+originalName)


     .then((result)=> result.json())
     .then((data)=>{
         console.log("Fetched Data")
        console.log(data)
        var arr=[]
        for(i in data.items)
        {
            var arr1=[]
            var i
            arr1.push({"name":data.items[i].name},{"full_name":data.items[i].full_name},{"private":data.items[i].private})
            let owner=[]
            owner.push({"login":data.items[i].owner.login},{"name":data.items[i].owner.url},{"followersCount":data.items[i].owner.followers_url},{"followingCount":data.items[i].owner.following_url})
            arr1.push({"owner":owner},{"lisence":data.items[i].license},{"score":data.items[i].score},{"numberOfBranch":data.items[i].branches_url})
            arr.push(arr1)
        }
        arr.push({"Count of results":i+1})
        console.log("Required Results")
        console.log(arr)
     })


})