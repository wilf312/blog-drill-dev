/// <reference types="cypress" />

import list from '../url.json'
context('Actions', () => {
  it('ページアクセス', () => {
    list.forEach(page => {
      cy.visit(`http://localhost:11111${page.url}`)
      cy.contains(page.title)
    })
  })
})

// APIのモックテスト
// context('mswテスト', () => {
//   it('https://mswjs.io/docs/api/setup-worker/use', () => {
//     cy.visit('http://localhost:11111/pages/test_github')
//     cy.window().then(({msw}: Window) => {
//       // Reference global instances set in "src/mocks.js".
//       const { worker, rest } = msw
//       worker.use(
//         rest.get('https://my.backend/book', (req, res, ctx) => {
//           return res(ctx.json({
//             title: 'aaaaaaaaa',
//           }))
//         }),
//       )
//       cy.contains('aaaaaaaaa')
//     })
//   })
// })