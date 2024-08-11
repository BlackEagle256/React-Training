// ============Sync Way===========

// function firstLog() {
//     console.log(1)
//     console.log(2)
// }

// function middleLog() {
//     setTimeout(() => {
//         console.log(3)
//     }, 3000);
// }

// function lastLog() {
//     console.log(4)
//     console.log(5)
//     console.log(6)
// }

// firstLog();
// middleLog();
// lastLog();


// console.log("========================")

// ==========aSync Way============

function firstLog() {
    console.log(1)
    console.log(2)
}

function middleLog(callBack) {
    setTimeout(() => {
        console.log(3)
        callBack()
    }, 3000);
}

function lastLog() {
    console.log(4)
    console.log(5)
    console.log(6)
}

firstLog();
middleLog(lastLog);
