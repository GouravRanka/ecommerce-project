import { Request, Response } from 'express'
import  express from 'express';
import  fs from 'fs'
import cors from 'cors'
import UserModel from './modals/UserSchema';
import connection from './database/schema/database';
import getAllProducts from './controllers/productController';


const app = express();
app.use(cors())
// below line is important for recieving form  encoded data 
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const port = 8000;


const server = app.listen(port, () => {
    console.log("server started on ", port);
})
// get product data 
app.get('/getAllProducts',getAllProducts)

connection();

// add a user 
app.post('/add_user', (req: Request, res: Response) => {
    const newData = new UserModel({
        name: req.body.name
    })
    var filepath = 'data.txt';
    fs.writeFile(filepath, req.body.name, (err) => {
        if (err)
            console.log("error came")
        else
            console.log("data saved")
    })
})