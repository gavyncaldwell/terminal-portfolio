import Prerenderer from '@prerenderer/prerenderer'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const routes = [
  '/',
  '/about',
  '/work',
  '/gear',
  '/gallery',
  '/contact',
  '/writing',
  '/writing/hello-world',
  '/writing/building-a-terminal-portfolio',
]

async function prerender() {
  console.log('Starting prerender...')

  const prerenderer = new Prerenderer({
    staticDir: resolve(__dirname, '../dist'),
    renderer: new PuppeteerRenderer({
      renderAfterTime: 500,
      headless: true,
    }),
  })

  try {
    await prerenderer.initialize()
    const renderedRoutes = await prerenderer.renderRoutes(routes)

    // Write rendered HTML to files
    for (const route of renderedRoutes) {
      const { promises: fs } = await import('fs')
      const routePath = route.route === '/' ? '/index' : route.route
      const filePath = resolve(__dirname, `../dist${routePath}.html`)

      // Ensure directory exists
      const dir = dirname(filePath)
      await fs.mkdir(dir, { recursive: true })

      // Write the prerendered HTML
      await fs.writeFile(filePath, route.html)
      console.log(`Prerendered: ${route.route}`)
    }

    console.log('Prerender complete!')
  } catch (error) {
    console.error('Prerender failed:', error)
    process.exit(1)
  } finally {
    await prerenderer.destroy()
  }
}

prerender()
