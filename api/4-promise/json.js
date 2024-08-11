let loginPromise = new Promise((resolve, reject) => {
    let isLogin = false;

    if (isLogin) {
        resolve("User is login");  //vlaue of User is Login is passed to res in line 11 
    }
    else {
        reject("User is not login");
    }
})

loginPromise
    .then((res) => {
        console.log(res)
    }).catch((error) => {
        console.log("Error in Promise:", error)
    })

