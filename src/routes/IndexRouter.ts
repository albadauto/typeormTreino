import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { jwtmiddleware } from '../middleware/jwt.middleware';


const indexRouter = Router();
const controller = new UserController();

indexRouter.post("/createNewUser", controller.handle)

indexRouter.get('/teste', new jwtmiddleware().verifyJWT)

indexRouter.get('/criarToken', controller.createToken)
export default indexRouter;