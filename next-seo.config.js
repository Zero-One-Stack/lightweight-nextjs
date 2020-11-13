const title = 'Lightweight Nextjs Starter - @pgerochi'
const description = 'A lightweight starter using nextjs without the added bulk, less than 350mb.'

const SEO = {
  title,
  description,
  canonical: 'https://zeroonestack.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://zeroonestack.com',
    title,
    description,
    images: [
      {
        url: 'https://zeroonestack.com/public/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@pgerochi',
    site: '@pgerochi',
    cardType: 'summary_large_image'
  }
}

export default SEO
