const fetchData = () => { // Fetch data returns a promise and .then can be used directly with . operator

    const promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('Done!');
        }, 1500)
    })
return promised
    
}

setTimeout(()=> {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
    })
}, 2000)

console.log('Hi');
console.log('Hello');

