function firstLog() {
    console.log("1");
    console.log("2");
}

function middleLog() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("3");
            console.log("4");
            resolve();
        }, 3000)
    })
    
}

function lastLog() {
    console.log("5");
    console.log("6");
}

async function allLogs(){
    firstLog();
    await middleLog();
    lastLog();
}

allLogs();