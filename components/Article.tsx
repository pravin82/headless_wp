import React from 'react'

export default function Article({article}): React.ReactElement {
    console.log("Article++++", article)
    let excerpt  = article.excerpt.replace(/<\/?[^>]+(>|$)/g, "")
    return (
        <div className="lg:flex mb-4 rounded shadow">
            <div className="w-1/2 h-auto my-8 mx-2 article-picture-container">
                <img src='' alt="DummyImage" />
            </div>
            <div className="ml-4">
                <h4 className="font-extrabold mt-2 text-xl article-title">{article.title}</h4>
                <p className="mt-2">
                    {excerpt}
                </p>
            </div>
    <style jsx>{`
        @media (max-width: 768px) {
            .article-picture-container{
                margin: 0 auto;
            }
            .article-title{
                text-align: center;
            }
        }
    `}</style>
        </div>
    )
}

/*

import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
*/
//{article.node.featuredImage && article.node.featuredImage.sourceUrl}
