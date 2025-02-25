import express from 'express'

const app : any = express()

app.get('/', (req: any, res: any): any => {
    res.send('Hello World')
})

app.listen(3000)