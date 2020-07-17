import express, { Application } from 'express'
import morgan from 'morgan'
import swaggerJsDocs from 'swagger-jsdoc'
import * as swaggerOptions from '../swagger.json'
import swaggerUi from 'swagger-ui-express'

// Routes
import IndexRoutes from './routes/index.routes'
import LinhasRoutes from './routes/linha.routes'
import ParadasRoutes from './routes/parada.routes'
import VeiculosRoutes from './routes/veiculo.routes'
import PosicoesRoutes from './routes/posicao.routes'


export class App {

  private app: Application

  constructor(private port?: number | string) {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
    // this.app.use(
    //   '/api-docs',
    //   swaggerUi.serve,
    //   swaggerUi.setup(swaggerDocument)
    // )
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 4000)
  }

  middlewares() {
    this.app.use(morgan('dev'))
    this.app.use(express.json())
  }

  routes() {
    this.app.use(IndexRoutes)
    this.app.use('/linhas', LinhasRoutes)
    this.app.use('/paradas', ParadasRoutes)
    this.app.use('/veiculos', VeiculosRoutes)
    this.app.use('/posicoes', PosicoesRoutes)
    this.app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerOptions))
  }

  async start() {
    await this.app.listen(this.app.get('port'))
    console.log(
      'Up, up, and running on http://localhost:',
      this.app.get('port')
    )
  }
}