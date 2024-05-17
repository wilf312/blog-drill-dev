import {HeadTag, Meta} from  '../../components/atom/Head'
export const meta: Meta = {
  title: '相続放棄を終わらせるまでに必要なこと',
  date: ['Thu Dec 24 2020 03:17:50 GMT+0900 (日本標準時)'],
  tag: ['相続放棄'],
  category: '人生',
  description: '相続放棄に必要なドメイン知識などがあったのでまとめる',
  image: 'https://log.drill.dev/meta/ogp.jpg', // url
  url: __dirname,
}
const article = `
# ${meta.title}

こんばんはGENYAです。この記事は12/24に書いています。

あまりないシチュエーションなので、
必要なことや、とったアクション、また理解したことなどをメモする。

基本的に相続放棄までの道のりについてメモする。

単語の整理
1. 被相続人（亡くなった方）
1. 申述人（相続放棄申述の書類を提出する人間（ここでは自分））

イベントの整理
1. 被相続人が亡くなる
1. 相続の権利がある人は亡くなったことを知ってから3ヶ月以内に相続放棄の申述をする
1. 期間内に 被相続人の最後の住所を管轄する家庭裁判所に申述書を提出する

分かったこと
1. 今回の書類提出時に必要な書類は　1.被相続人の除籍謄本 2. 住民票除票 3. 申述人の戸籍謄本 4. 相続放棄申述書 5. 申述書に貼る収入印紙 800円 6. 切手　82円×5枚，10円×5枚
2. 除籍謄本の提出が始まっていて重複する書類がある場合は要らない。

`

import { compileMarkdownToHtml, Wrap } from '../../domain/article'

function page() {
  return <>
    <HeadTag {...meta} url={__dirname} />
    <Wrap dangerouslySetInnerHTML={{__html: compileMarkdownToHtml(article)}} />
  </>
}

export default page
