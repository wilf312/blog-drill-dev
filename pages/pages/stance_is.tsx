import {HeadTag, Meta} from  '../../components/atom/Head'
export const meta: Meta = {
  title: 'スタンスを表明しよう。',
  date: ['Thu, 10 Dec 2020 17:22:47 GMT'],
  tag: ['転職', '人生', 'コラム'],
  category: '仕事',
  description: '根底に流れる動機が共有されていると仕事が振りやすいよねという話',
  image: 'https://log.drill.dev/meta/ogp.jpg', // url
  url: __dirname,
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
    <HeadTag {...meta} url={__dirname} />
    <Wrap dangerouslySetInnerHTML={{__html: compileMarkdownToHtml(article)}} />
  </>}

export default page
