import MarkdownIt from 'markdown-it'
import styled from 'styled-components'

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