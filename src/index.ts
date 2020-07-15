import { App } from './app'

async function main() {
  const app = new App(4001)
  await app.start()
}

main()