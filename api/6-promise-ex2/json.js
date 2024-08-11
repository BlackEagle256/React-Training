let articles = [
    { id: 1, title: "title1", createdAt: "1234/11/07" },
    { id: 2, title: "title2", createdAt: "2345/11/07" }
]

function articleLogs() {
    articles.forEach(article => {
        console.log(article)
    })
}

function addArticles() {
    let newArticle = {
        id: 3, title: "title3", createdAt: "3456/11/07"
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            articles.push(newArticle),
                resolve()
        }, 3000)
    })


}

addArticles()
    .then(articleLogs)