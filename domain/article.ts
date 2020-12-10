import MarkdownIt from 'markdown-it'
import styled from 'styled-components'
// import Head from 'next/head'

// markdownのコンパイル
export const compileMarkdownToHtml = (markdownText) => {
  const md = new MarkdownIt();
  return md.render(markdownText);
}

// 記事のラッパータグ
export const Wrap = styled.main`
  padding-left: 16px;
  padding-right: 16px;
`

// headタグ
// export const HeadTag = (props: {
//   url: string
//   title: string
//   imageUrl: string
//   description: string
//   type: string
// }) => {
//   return <Head>
//     <title>{props.title}</title>
//     <title>{props.title}</title>
//     <meta property="og:title" content={props.title} />
//     <meta property="og:description" content={props.description} />
//     <meta property="og:type" content={props.type} />
//     <meta property="og:url" content={props.url} />
//     <meta property="og:image" content={props.imageUrl} />
//   </Head>
// }