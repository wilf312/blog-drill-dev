/**
 * 記事ページのアクセスチェックをするためのURLとタイトルのリストをJSONで吐き出す
 */

const fs = require('fs')
const path = require('path')

let list = [] // JSONにするためのデータを貯めるlist

const PATH = {
  OUTPUT: path.resolve(__dirname, './url.json')
}

const pagesPath = path.resolve(__dirname, '../pages/pages')
const fileList = fs.readdirSync(pagesPath)

fileList.forEach(fileName => {
  const filePath = path.resolve(pagesPath, fileName)

  // NOTE: この辺無理やりなので、babelでAST解析するときれいにかけそうな気がする
  const fileText = fs.readFileSync(filePath, {encoding: 'utf8'})
  const titleText = fileText.split('\n').find(line => line.indexOf('title:') !== -1)
  const reg = /\'(.+)\'+/
  const title = titleText.match(reg)[1]

  list.push({
    title,
    url: `/pages/${fileName.replace('.tsx', '')}`
  })
})


const json = JSON.stringify(list, null, 2)

fs.writeFileSync(PATH.OUTPUT, json)

