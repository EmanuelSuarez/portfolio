import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <meta name="description" content="Desarrollador web con amplia experiencia en React y otras tecnologías modernas. Echa un vistazo a mi portfolio para ver algunos de mis trabajos y contáctame para discutir cómo puedo ayudarte a impulsar tu negocio en línea."/>
          <meta name="keywords" content="developer, argentina, buenos aires, desarrollador web, react, portfolio, proyectos, "></meta>
          {/* Open Graph */}
          <meta property="og:title" content="Emanuel Suarez - Developer"/>
          <meta property="og:type" content="Portfolio Website"/>
          <meta property="og:image" content="URL de mi imagen"/>
          <meta property="og:url" content="https://emanuelsuarez.com"/>
          <meta property="og:description" content="Soy un desarrollador web altamente capacitado en React y otras tecnologías modernas. Echa un vistazo a mi portfolio para ver algunos de mis trabajos y contáctame para discutir cómo puedo ayudarte a impulsar tu negocio en línea."/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}