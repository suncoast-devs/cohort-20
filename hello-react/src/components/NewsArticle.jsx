import React from 'react'

// C#:     $"Hello {name}"
// JS:     `Hello ${name}"
// JSX:     {name}

// export the class so we can use it elsewhere
//
//     keyword form javascript declaring a class
//
//           name of our class (should match filename exactly)
//
//                       is a kind of
//
//                               Magic react component
export class NewsArticle extends React.Component {
  // Our one and only absolute requirement is a `render` method
  // that `return`s some JSX
  render() {
    // console.log(this.props)

    return (
      <article className="intro-article">
        <h2 className="article-title">{this.props.title}</h2>
        <p>{this.props.body}</p>
        <a className="read-more" href="#here">
          read more about SDG Announces Hackathon!
        </a>
      </article>
    )
  }
}
