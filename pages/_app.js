import '@styles/globals.css'

import Script from 'next/script'

function Application({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3ZT9WG8D0X"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3ZT9WG8D0X');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default Application
