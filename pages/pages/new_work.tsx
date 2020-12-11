 import Head from 'next/head'
import type {Meta} from '../../types/meta'
export const meta: Meta = {
  title: '新しい職場に入るということ',
  date: ['Wed, 9 Dec 2020 17:22:47 GMT'],
  tag: ['転職', '人生', 'コラム'],
  category: '仕事',
  description: '新しい会社に入る心構えについて',
  image: 'https://log.drill.dev/meta/profile.jpg' // url
}
const article = `
# ${meta.title}

こんばんはGENYAです。この記事は2020/11/14 深夜2時に書き始めています。


丁度、2020年の末で今 お受けしていた仕事を終えることになり、新しいお仕事を探す段になったので、新しい会社に入る心構えについて、自分の中で**いつものやつ**というのがあるのでそれをまとめたいと思います。

## 新しい会社とはどういう存在なのか

新しい会社とはどういう存在でどういう不確定要素があり、最初の障壁、次の障壁は何かというのを、知っているか知っていないかで新しい職場へのイメージが変わってきます。

## 馴染むにはワークフローを知るのが先決

求められている仕事の一番簡単なものを最速最短で終わらせましょう。終わらせることが大事で一連の動作がどういう流れで始まりかつ終わり、誰に報告するのか、報告した後実際にお客さんに届くまでのイメージができると全体の動き方の概要をグッと自分の**知っていること**の中に引き込むことができます。


その中で関わった人と雑談をしたり、自分がどういう人間で相手がどういう人間かを教えてもらいながら信頼値を稼ぎましょう。

最初の仕事は初めましての挨拶のようなものなので、どんどん教えを請い素直に相手の話を聞き、どういう職場なのか雰囲気を教えてもらいましょう。

## 全体の知識の構成を知る

仕事を構成する知識は大きく分けて3つあります。

1. 技術の知識（ReactやAPI、DBなどの技術）
2. 事業ドメインの知識（お金を得るために提供している価値、その価値を生むためのバックグラウンド）
3. チームの知識（どの人が何を決めているのか、チームのドキュメントやルール、原則）

この3つの内、2.3.については予習が出来ないその会社やチームだけが持つ知識になるので、ルールベースになるものや、その根幹にあたる考え方を知ることで、根幹に流れる内的動機を知ることができます。

↓別の記事に切り出す

## [optional]プロダクトを持っている現場で必ずやっていること


これは入社時のみに使えるチート技の1つです。サービスを利用開始から（できれば）終了までの道筋を誰かの説明なしに行います。その過程の中で感じた違和感や人に聞かないとわからないこと、3回読んでも操作方法が分からないことなどをメモにまとめていきます。

これは開発で慣れ親しんでいないからこそ、できる強力なフィードバックになるので箇条書きでメモして、POやPdMとゆっくり話せる機会のときに見ながら話すとどういうことを気にしているのか話すことができます。

### 新しい職場は次の未来、その次の未来への職場の足がかりになることも少なくありません

信頼値を築いて進化していきましょう。
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
  </>
}

export default page
