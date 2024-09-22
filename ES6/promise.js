/* It is an assurance that something will be done.The promise is used to keep track
whether the asynchronous task has been completed or not. */


let promise = new Promise(function(resolve,reject){
    let a = 1+1;
    a == 2 ? resolve('Success') : reject('Failed');

});

promise
    .then((message)=>{
        console.log('Successs : '+message);
    })

    .catch((message)=>{
        console.log('Failed : '+message);
    });
