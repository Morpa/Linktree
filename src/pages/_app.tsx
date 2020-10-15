import { AppProps } from 'next/app'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Morpa</title>
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="My personal linktree!" />
      </Head>
      <NextSeo
        title="Morpa Linktree"
        description="My personal linktree!"
        canonical="https://morpa-linktree.netlify.app/"
        openGraph={{
          url: 'https://morpa-linktree.netlify.app/',
          title: 'Morpa Linktree',
          description: 'My personal linktree!',
          images: [
            {
              url:
                'https://res.cloudinary.com/morpa/image/upload/v1602782383/MyFiles/icon-192_qnnai1.png'
            }
          ],
          site_name: 'Morpa',
          locale: 'pt_BR'
        }}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
