import Head from 'next/head'
import type {Meta} from '../../types/meta'
export const meta: Meta = {
  title: 'スタンスを表明しよう。',
  date: ['Thu, 10 Dec 2020 17:22:47 GMT'],
  tag: ['転職', '人生', 'コラム'],
  category: '仕事',
  description: '根底に流れる動機が共有されていると仕事が振りやすいよねという話',
  image: 'https://log.drill.dev/meta/profile.jpg' // url
}
const article = `
# ${meta.title}

これは仕事を誰かとする上でどういう人間なのか、どういう思考で動いているのか、
先んじて表明しておくことで摩擦係数を下げることができるよという話です。

12/11の1時にどういうスタンスで話をしているか、次の職場で表明したいなと思って書いています。

## スタンスを表明する

根底に流れる動機が共有されていると仕事が振りやすい。振られやすい。魔除けになる。たまに石を投げられる。
この成長角度を目指しているなら、この抽象度で仕事を渡してもよいレスポンスが返ってくるだろうと期待値が調整されるのだと思う。


表明したことで、お前はここまで言っただろ！みたいに怒ってくる人は人生の中のパートナーにはなれない人なのでそっとお別れをしましょう。

`

import { compileMarkdownToHtml, Wrap } from '../../domain/article'

function page() {

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
    <Wrap dangerouslySetInnerHTML={{__html: compileMarkdownToHtml(article)}} />
  </>}

export default page
