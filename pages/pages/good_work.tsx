import {HeadTag, Meta} from  '../../components/atom/Head'
export const meta: Meta = {
  title: '良い仕事の自分なりの基準',
  date: ['Thu Dec 24 2020 03:17:50 GMT+0900 (日本標準時)'],
  tag: ['仕事', '基準'],
  category: '仕事',
  description: '自分がマッチする仕事を得るときの基準について',
  image: 'https://log.drill.dev/meta/ogp.jpg', // url
  url: __dirname,
}
const article = `
# ${meta.title}

こんばんはGENYAです。この記事は12/24に書いています。

たまに良い職場の条件が話題になることがあるので、
自分が思う良い職場の条件についてまとめました。

1. 事業に共感できること
2. 売れるものを作ることに集中していること
3. 自分の給与基準を満たすこと
4. PdMと開発統括、経営者の考えに共感できること
5. 会社が大事にしていることと自分が大事にしていることが重なるところがあること

`

import { compileMarkdownToHtml, Wrap } from '../../domain/article'

function page() {
  return <>
    <HeadTag {...meta} url={__dirname} />
    <Wrap dangerouslySetInnerHTML={{__html: compileMarkdownToHtml(article)}} />
  </>
}

export default page
