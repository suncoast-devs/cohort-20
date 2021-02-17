import React from 'react'

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
    return <div>Something</div>
  }
}
