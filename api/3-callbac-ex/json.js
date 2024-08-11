let articles = [
    { id: 1, title: 'callback', createdAt: '1234/12/21' },
    { id: 2, title: 'callback2', createdAt: '2345/12/21' },
]

function articlesLog() {
    articles.forEach(article => {
        console.log(article)
    });
}

function addArticle(callback) {
    let newArticles = { id: 3, title: 'callback3', createdAt: '3456/12/21' }

    setTimeout(()=>{
        articles.push(newArticles)
        callback()
    },3000)
}

addArticle(articlesLog)
// articlesLog() به دلیل آسینک بودن، لاگش نمیگیره.پس مستقیم فراخوانی نمیکنیم