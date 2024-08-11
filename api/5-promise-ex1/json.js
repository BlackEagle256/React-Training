function firstLog() {
    console.log(1)
    console.log(2)
}

function middleLog(callBack) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3);
            resolve()
        }, 3000)
    })
}

function lastLog() {
    console.log(4)
    console.log(5)
}

firstLog();

// middleLog().then(() => {
//     lastLog();
// });

middleLog()
    .then(lastLog)