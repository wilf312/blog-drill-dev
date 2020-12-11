 import Head from 'next/head'
import type {Meta} from '../../types/meta'
export const meta: Meta = {
  title: 'なぜボーイスカウトルールがいるのか',
  date: ['Wed, 9 Dec 2020 17:22:47 GMT'],
  tag: ['転職', '人生', 'コラム'],
  category: '仕事',
  description: 'コードをきれいに保つための努力について',
  image: 'https://log.drill.dev/meta/ogp.jpg' // url
}
const article = `
# ${meta.title}


`

import { compileMarkdownToHtml, Wrap } from '../../domain/article'

const MetaTag = () => {
  return <>
  <Head>
      <title>{meta.title}</title>
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={__dirname} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  </>
}

function page() {
  return <>
    <MetaTag />
    <Wrap dangerouslySetInnerHTML={{__html: compileMarkdownToHtml(article)}} />
  </>
}

export default page
