// let newPost={
//     userid:21,
//     body:"Fetch in js",
//     title:"js"
// }

// fetch(`https://jsonplaceholder.typicode.com/posts`,{
//     method:'POST',
//     body:JSON.stringify(newPost)
// }).then((res)=>{
//     return res.json()
// }).then(data=>{
//     console.log(data)
// })

fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
    method: "DELETE",

}).then((res)=>{
    return res.json()
}).then(data=>{
    console.log(data)
})