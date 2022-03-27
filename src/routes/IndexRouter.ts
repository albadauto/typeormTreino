import { Router } from 'express';
import { UserController } from '../controller/UserController';


const indexRouter = Router();

indexRouter.post("/createNewUser", new UserController().handle)



export default indexRouter;