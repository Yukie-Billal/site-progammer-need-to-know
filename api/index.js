import express from 'express'

const app = express()

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`run: ${process.env.HOST}:${process.env.PORT}`)
})
