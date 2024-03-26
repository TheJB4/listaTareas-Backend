import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import 'dotenv/config';

import './src/database/database.js'
import todoRoutes from './src/routes/todo.routes.js'

let app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'/public')))

app.use(cors({
    origin:'https://lista-tareas-jmt3mghfz-thejb4.vercel.app',
    credentials: true
}))

app.listen(process.env.PORT,() => {
    console.log(`app listen in port: ${process.env.PORT}`)
})

app.use('/api',todoRoutes)
