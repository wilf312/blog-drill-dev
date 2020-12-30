/// <reference types="cypress" />

import list from '../url.json'
console.log(list)

context('Actions', () => {
  it('ページアクセス', () => {
    list.forEach(page => {
      cy.visit(`http://localhost:11111${page.url}`)
      cy.contains(page.title)
    })
  })
})