import MarkdownIt from 'markdown-it'
import styled from 'styled-components'
// import Head from 'next/head'

// markdownのコンパイル
export const compileMarkdownToHtml = (markdownText: string): string => {
  const md = new MarkdownIt();
  return md.render(markdownText);
}

// 記事のラッパータグ
export const Wrap = styled.main`
  padding-left: 16px;
  padding-right: 16px;
`
