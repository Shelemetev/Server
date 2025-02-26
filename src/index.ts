import express, { Express, Request, Response } from "express";

const app : any = express()
const port: any  = process.env.PORT || 4000;
app.get('/', (req : any, res : any): any => {
    res.send('Hello World')
})

app.listen(port)