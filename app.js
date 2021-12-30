const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

const greeter = require("./greeter")
const ab =require('./intro')
ab()
const name = "Sundar Parajuli"
console.log(greeter.greetName(name)+ greeter.report)


const fib = (number) => {
    if(number<=2){
        return 1;
    }else{
       
        return fib(number-1)+fib(number-2)
    }
}

console.log("Fibonacci of 45 is "+ fib(11))