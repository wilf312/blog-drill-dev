import type {Meta} from '../../types/meta'
export const meta: Meta = {
  tag: ['転職', '人生', 'コラム'],
  category: '仕事',
  description: '根底に流れる動機が共有されていると仕事が振りやすいよねという話',
  image: 'hoge' // url
}
const article = `
# スタンスを表明しよう。

これは仕事を誰かとする上でどういう人間なのか、どういう思考で動いているのか、
先んじて表明しておくことで摩擦係数を下げることができるよという話です。

これは12/11の1時にふとどういうスタンスで話をしているか、次の職場で表明したいなと思って書いています。

## スタンスを表明する

根底に流れる動機が共有されていると仕事が振りやすい。
これは確実にあると思っていて、この成長角度を目指しているなら、この抽象度で仕事を渡してもよいレスポンスが返ってくるだろうと期待値が調整されるのだと思う。


表明したことで、お前はここまで言っただろ！みたいに怒ってくる人は人生の中のパートナーにはなれない人なのでそっとお別れをしましょう。

`

import { compileMarkdownToHtml, Wrap } from '../../domain/article'

function page() {
  return <Wrap dangerouslySetInnerHTML={{__html: compileMarkdownToHtml(article)}} />
}

export default page
