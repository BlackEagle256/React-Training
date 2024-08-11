let List = [
    { id: 1, title: "title1", created: "MH" },
    { id: 2, title: "title2", created: "MF" },
    { id: 3, title: "title3", created: "MD" },
]

function articleLog() {
    List.forEach(article => {
        console.log(article)
    })
}

function addArticle() {
    let newList = {
        id: 3, title: "title3", created: "MP"
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            List.push(newList),
                resolve()
        }, 3000)
    })
}

addArticle()
    .then(articleLog)