import { useEffect, useState } from 'react'
import {HeadTag, Meta} from  '../../components/atom/Head'
import {Repositories} from './_api_github'

export const meta: Meta = {
  title: 'github test',
  date: ['Thu Dec 24 2020 03:17:50 GMT+0900 (日本標準時)'],
  tag: ['仕事', '基準'],
  category: '仕事',
  description: '自分がマッチする仕事を得るときの基準について',
  image: 'https://log.drill.dev/meta/ogp.jpg', // url
  url: __dirname,
}
const article = `
# ${meta.title}

`

import { compileMarkdownToHtml, Wrap } from '../../domain/article'

const page: React.ReactFragment = () => {

  const [body, setBody] = useState<Repositories|null>(null)
  useEffect(() => {
    setTimeout(() => {
      console.log(`fetch('/https://my.backend/book')`)
      fetch('https://my.backend/book')
        .then(data => data.json())
        .then(body => {
          console.log(body)
          setBody(body)
        })
    }, 300)
  }, [])
  return <>
    <HeadTag {...meta} url={__dirname} />
    <pre>{JSON.stringify(body, null, 2)}</pre>
    <Wrap dangerouslySetInnerHTML={{__html: compileMarkdownToHtml(article)}} />
  </>
}

export default page
