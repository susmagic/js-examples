console.log('Request data...')

// const p = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })


// p.then(function(data){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })

//     // p2.then(function(clientData){
//     //     console.log('Data received', clientData)
//     // })
// }).then(function(clientData){
//     console.log('Data received', clientData)
//     clientData.fromPromise = true
//     return clientData
// }).then(data => {
//     console.log('Modified', data)
// })
// .catch(err => console.error('Error', err))
// .finally(()=> console.log('Finally'))


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(()=> resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

Promise.all([sleep(2000), sleep(5000)]).then(()=>{
    console.log('All promises')
    //Сработает через 5 секунд когда все промисы выполнятся
})

Promise.race([sleep(2000), sleep(5000)]).then(()=>{
    console.log('Race promises')
    //Сработает как сработает первый промис
})