import express, { Express, Request, Response } from "express";

const app : any = express()
const port : string = process.env.PORT ;
app.get('/', (req : any, res : any): any => {
    res.send('Hello World')
})

app.listen(port)