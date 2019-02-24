//Twój kod
const sleepSort = () => {
    // let mySum = 0;
    for(let i = 2; i < process.argv.length; i++) {
        let myArg = Number(process.argv[i]);
        setTimeout(() => {
            return console.log( myArg );
        }, myArg*1000)
    };

}
sleepSort();