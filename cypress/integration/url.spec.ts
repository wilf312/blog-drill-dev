/// <reference types="cypress" />

import list from '../url.json'
console.log(list)

// context('Actions', () => {
//   it('ページアクセス', () => {
//     list.forEach(page => {
//       cy.visit(`http://localhost:11111${page.url}`)
//       cy.contains(page.title)
//     })
//   })
// })

context('mswテスト', () => {
  it('https://mswjs.io/docs/api/setup-worker/use', () => {
    cy.visit('http://localhost:11111/pages/test_github')
    cy.window().then((window: any) => {
      // Reference global instances set in "src/mocks.js".
      const { worker, rest } = window.msw
      worker.use(
        rest.get('https://my.backend/book', (req, res, ctx) => {
          return res(ctx.json({
            title: 'aaaaaaaaa',
            imageUrl: '/book-cover.jpg',
            description:
              'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
          }))
        }),
      )
      cy.contains('aaaaaaaaa')
    })
  })
})