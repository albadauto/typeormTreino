import express from 'express';
import "./database/index";
import indexRouter from './routes/IndexRouter';
import cors from 'cors';

const app = express();
/**
 * O QUE É O TYPEORM?
 * Typeorm é um framework para banco de dados;
 * Consiste na seguinte arquitetura:
 * 
 * migration -> Todo o modelo da tabela, serve para definir e atualizar as versoes das tabelas do banco
 * entities -> é a tabela em si, o decorator @Entity recebe como parametro o migration da tabela em questao
 * services -> Fica toda as operações do banco de dados
 * 
 * MUITO LOUCO GOSTEI RS
 */
app.use(cors());
app.use(express.json());
//Routes

app.use('/', indexRouter)

app.listen(5000, () => console.log("API IS RUNNING"));