import express, { Application } from 'express';
import morgan from 'morgan';

// Routes
import IndexRoutes from './routes/index.routes';
import LinhasRoutes from './routes/linha.routes';
import ParadasRoutes from './routes/parada.routes';
import VeiculosRoutes from './routes/veiculo.routes';
import PosicoesRoutes from './routes/posicao.routes';



export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        //this.app.use(express.urlencoded)
        this.app.use(express.json());
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/linhas', LinhasRoutes);
        this.app.use('/paradas', ParadasRoutes);
        this.app.use('/veiculos', VeiculosRoutes);
        this.app.use('/posicoes', PosicoesRoutes);

    }

    async start() {
        await this.app.listen(this.app.get('port'));
        console.log("Up, up, and running on http://localhost:", this.app.get('port'));

    }
}