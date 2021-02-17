import React, { Component } from 'react'

// Tell javascript to go get that class (component)
// from the file we just created.
import { NewsArticle } from './components/NewsArticle'

export class App extends Component {
  render() {
    return (
      <div className="all-main-content">
        <main>
          <NewsArticle
            title="SDG Announces Hackathon!"
            body="SDG announces the 2020 Summer Hackathon. Join us for an exciting weekend"
          />
          <NewsArticle
            title="Student Graduation is Right Around the Corner"
            body="Our next cohort of students will be graduating in just over a week."
          />
          <NewsArticle
            title="SDG Standardizes on React"
            body="React is the best library for learning front end Web"
          />
          {/* <article className="intro-article">
            <h2 className="article-title">SDG Announces Hackathon!</h2>
            <p>
              SDG announces the 2020 Summer Hackathon. Join us for an exciting
              weekend
            </p>
            <a className="read-more" href="#here">
              read more about SDG Announces Hackathon!
            </a>
          </article>

          <article className="intro-article">
            <h2 className="article-title">
              Student Graduation is Right Around the Corner
            </h2>
            <p>
              Our next cohort of students will be graduating in just over a
              week.
            </p>
            <a className="read-more" href="#here">
              read more about Student Graduation is Right Around the Corner
            </a>
          </article> */}
        </main>
      </div>
    )
  }
}
