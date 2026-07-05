import dotenv from 'dotenv';
dotenv.config();
import app from "./app"
import { mongoDBConnection } from './repositories/user.repositories';

mongoDBConnection()

app.listen(process.env.PORT, () => {

    console.log(`Server is running on port ${process.env.PORT}`);

})