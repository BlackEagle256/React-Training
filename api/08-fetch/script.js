// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then((res) => {
//         return res.json()
//     })
//     .then((data => {
//         console.log(data)
//     }))


fetch(`https://randomuser.me/api/`)
    .then((res) => {
        return res.json()
    }).then(data => {
        console.log(data.results)
    })
