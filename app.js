const http = require("http");
const PORT = process.env.PORT || 3000
const cron = require("node-cron");
const server = http.createServer((req,res)=>{
     res.end(`hello from server runnung on port ${PORT} process id ${process.pid} `);
})
console.log("Deferwef");
for(let i=0 ; i<=10; i++){
    console.log(`hello ${i} in processid ${process.pid}`)
}

cron.schedule("* * * * *",()=>{
	console.log(`cron is running ${new Date()}` )
})
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT} and pid is ${process.pid} `)
})
