import React, { Component } from 'react'

// Tell javascript to go get that class (component)
// from the file we just created.
import { NewsArticle } from './components/NewsArticle'
import articles from './articles'

export class App extends Component {
  render() {
    // console.log('The next thing is articles')
    // console.log(articles)
    // console.log('---------------------------')

    // const articlesTitles = articles.map(function (article) {
    //   return article.title
    // })

    // console.log(articlesTitles)

    const newsArticlesFromData = articles.map(function (article) {
      return (
        <NewsArticle
          key={article.id}
          title={article.title}
          body={article.body}
        />
      )
    })

    return (
      <div className="all-main-content">
        <main>{newsArticlesFromData}</main>
      </div>
    )
  }
}
