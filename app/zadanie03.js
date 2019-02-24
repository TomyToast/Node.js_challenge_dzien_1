//Twój kod
const sum = () => {
    let mySum = 0;
    for(let i = 2; i < process.argv.length; i++) {
        let myArg = Number(process.argv[i]);
        mySum += myArg;
    };
    return console.log( mySum );
}
sum();