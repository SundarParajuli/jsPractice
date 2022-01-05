const express = require("express")
const app = express()
app.set("port",3000)

app.get("/", function(req, res) {
    console.log("GET received");
    res.status(404).send("Received your GET request.");
    });

const server= app.listen(app.get("port"), function() {
    const port= server.address().port;
    console.log("Listening to port "+ port);
})

const greeter = require("./greeter")
const ab =require('./intro')
ab()
const name = "Sundar Parajuli"
console.log(greeter.greetName(name)+ greeter.report)


const fib = (number) => {
    if(number<=2)
        return 1;
    return fib(number-1)+fib(number-2)
}

console.log("Fibonacci of 45 is "+ fib(11))

