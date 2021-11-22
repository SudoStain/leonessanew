import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getLangFromReq } from '../utils/fromReq'
import { ServerStyleSheet } from 'styled-components'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const lang = getLangFromReq(ctx.req)
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => 
        originalRenderPage({
          enhanceApp: App => props => 
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        lang,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang={this.props.lang}>
       <Head>
          <meta name="description" content="Multi-Media creation and Applications development created to serve the digital age. All businesses can benefit from the products and services crafted by Ogiven."></meta>
          <meta name="theme-color" content="#FFFFFF"/>
          
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link href='/favicon.ico' rel='icon' type='image/png' sizes='16x16' />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
